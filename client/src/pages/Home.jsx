import React from 'react'

export default function home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
    <h1 className='mx-auto mt-14 text-blue-700 text-3xl font-bold mb- 5'> Welcome to the Authentication App !</h1>
    <p className=' mt-5 font-mono'> This is a web stack auth app made using MERN stack and the features available are 
      like signin, signout, login, updation, deletion of the user data. It provides access 
      to protected routes only for authenticated users . 
      </p>
      <p className=' mt-5 font-mono '> Front end - React and React Router for client-side routing. <br/> <br/>
                          Back end  - Node.js and Express and MongoDB as the database
      </p>
      <p className='mt-5 font-semibold text-red-700'>Thanks for having a look at it !</p>
      <p className='mt-5 font-medium'>More changes will be made further ig  </p>

  </div>
  )
}
