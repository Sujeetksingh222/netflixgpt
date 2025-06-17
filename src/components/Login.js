import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    } ;   
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg" 
        alt="logo"
        />
        </div>
  
<form 
className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0  text-white bg-opacity-80  rounded-lg'>
    <h1 
    className='text-3xl text-white py-4'>
      {isSignInForm?"Sign In":"Sign Up"}
      </h1>
      {!isSignInForm && (<input 
      type="text" placeholder='Full Name' 
      className='p-2 my-4 w-full bg-gray-600' 
      />)}
        <input
         type="text" placeholder='Email Address' 
         className='p-2 my-4 w-full bg-gray-500'
          />
    
        <input
         type="password" placeholder='Password' 
         className='p-2 my-4 w-full bg-gray-600' 
         />

        <button
         className='bg-red-700 text-white p-4 my-6 w-full   rounded-lg'>
          {isSignInForm?"Sign In": "Sign Up"}</button>
       <p 
       className='py-4 cursor-pointer' 
       onClick={toggleSignInForm}>
        {isSignInForm?"New to Netflix?Sign Up Now":"Already registered?Sign In now"}
        </p>
    </form>
      </div>
  )
}

export default Login