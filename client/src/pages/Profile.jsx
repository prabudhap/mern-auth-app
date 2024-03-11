import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import { app } from '../firebase';


export default function profile() {
  const  fileRef = useRef(null);
  const [image, setImage] = useState(undefined); // to save the image
  //console.log(image);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  
  const { currentUser, loading, error } = useSelector((state) => state.user);
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };


  return (
    <div className='p-3  max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold rounded-sm text-center my-7 text-blue-700 p-6 '>
        Profile
      </h1>
      <form className='flex flex-col gap-4 ' >

        <input type="file" ref={fileRef} hidden accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
        
        <img src = { formData.profilePicture || currentUser.profilePicture} alt="profile" className='h-25 w-25 self-center cursor-pointer rounded-full object-cover mt-2 ' onClick={() => fileRef.current.click()}/>
        
        <p>{imageError ? (<span className='text-red-700'>Error uploading image</span>) : imagePercent > 0 && imagePercent < 100 ?
         (<span className='text-red '>{`Uploading :   ${imagePercent} %`}</span>) : imagePercent === 100 ? (<span className='text-green-600'>uploaded successfully</span>): "" }</p>
      
      
      <input defaultValue={currentUser.username} type="text" id ='username' placeholder='Username' className='bg-slate-200 rounded-lg p-3 mt-2'  />
      <input  defaultValue={currentUser.email} type="email" id ='email' placeholder='Email' className='bg-slate-200 rounded-lg p-3 mt-2'  />
      <input  type="password" id ='password' placeholder='Password' className='bg-slate-200 rounded-lg p-3 mt-2'  />
      
      <button className='bg-slate-800 text-white p-3 uppercase hover:opacity-40 disabled:opacity-30'>update </button>
      </form>
      <div className='flex justify-between mt-4 '>
        <span className='text-red-700 cursor-pointer hover:opacity-65 '>Delete Account</span>
        <span className='text-red-700 cursor-pointer hover:opacity-65 '>Sign Out</span>

      </div>
    </div>
  )
}
