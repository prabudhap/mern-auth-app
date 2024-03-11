import React from 'react'
import { useSelector } from 'react-redux'
export default function profile() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className='p-3  max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold rounded-sm text-center my-7 text-blue-700 p-6 '>
        Profile
      </h1>
      <form className='flex flex-col gap-4 ' >
         <img src = { currentUser.profilePicture} alt="profile" className='h-25 w-25 self-center cursor-pointer rounded-full object-cover mt-2 '/>
      
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
