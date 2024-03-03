import React from 'react';
import { Link } from 'react-router-dom';

export default function signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>

      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign Up
      </h1>

      <form className='flex flex-col gap-4   '>

        <input type="text" placeholder='Username' id='username' className='bg-slate-300 p-3 rounded-lg' />
        <input type="text" placeholder='Email' id='email' className='bg-slate-300 p-3 rounded-lg' />
        <input type="password" placeholder='Password' id='password' className='bg-slate-300 p-3 rounded-lg' />  
        <button className='bg-blue-500 rounded-lg text-white uppercase hover:opacity-80 disabled:opacity-40'>Sign Up</button>  
          
      </form>

      <div className='flex p-3 gap-4 justify-center' >
          <p className='font-semibold'>A previous Pal ?</p>
          <Link to = '/sign-in'>
          <span className='ring-offset-fuchsia-700 text-green-700 font-semibold'>Sign In</span>
          </Link>
      </div>

    </div>

  )
}
