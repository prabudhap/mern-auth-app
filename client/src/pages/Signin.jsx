import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { signInStart,signInFailure, signInSuccess } from '../redux/user/userSlice.js';
import {useDispatch,useSelector} from 'react-redux';
import OAuth from '../components/OAuth';

export default function signin() {

  //for the username,email,password
  const [formData, setFormData] = useState({});
  const {error,loading} =  useSelector((state) => state.user);
  console.log(loading,error)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange =(e) => {
       setFormData({ ...formData, [e.target.id]:e.target.value});
  }

  //for the signing up thing on submittion
  const handleSubmit = async (e) => 
  {   
    e.preventDefault(); //to not let the page refresh while submitting
    
    try {
        dispatch(signInStart());
      const res = await fetch ('/api/auth/signin', 
      {
        method:'POST',
        headers: 
        {
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });
      
     
      const data = await res.json();

      
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      
      }
      dispatch(signInSuccess(data));
      navigate('/');

    } catch (error) {
      dispatch(signInFailure(error)); 
    }
   
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>

      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign In
      </h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4   '>

        <input type="text" placeholder='Email' id='email' className='bg-slate-300 p-3 rounded-lg'onChange={handleChange}/>
        <input type="password" placeholder='Password' id='password' className='bg-slate-300 p-3 rounded-lg' onChange={handleChange}/>  
        <button disabled={loading} className='bg-blue-500 rounded-lg text-white uppercase hover:opacity-80 disabled:opacity-40'>{loading ? 'loading ...' : 'Sign IN'}</button>  
          <OAuth/>
      </form>

      <div className='flex p-3 gap-4 justify-center' >
          <p className='font-semibold'>Dont have an account ?</p>
          <Link to = '/sign-up'>
          <span className='ring-offset-fuchsia-700 text-green-700 font-semibold'>Sign up</span>
          </Link>         
      </div>
      <p className='text-red-700 mt-5' >
        {error ? error.message || 'Something went wrong!' : ''}
      </p>
    </div>

  )
}
