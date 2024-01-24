import React, { Fragment } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import.meta.env.VITE_URL
const AuthPage = () => {

  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  console.log()
  return (
    <Fragment>
        <div className='h-screen w-screen text-black font-sans font-medium pt-6 bg-neutral-600 ' >
            <div className=' bg-white w-[29vw] m-auto flex flex-col gap-2 pt-6 min-w-[340px]  border-2 rounded-lg '  > 
            <div className='text-3xl font-bold text-center '  >
                <h3>Sign Up</h3>
            </div>
            <div className=' w-[70%] m-auto text-center text-slate-500 text-sm ' >
              Enter your information to create an account
            </div>
            <div className='m-auto w-[80%] ' >
              <div>
              <label htmlFor="FirstName" className='font-bold' >First Name</label>
              </div>
              <input className='p-2 text-black w-[100%] mt-2' type="text" placeholder='firstname' />
            </div>
            <div className=' w-[80%] m-auto ' >
              <div>
              <label htmlFor="lastname" className='font-bold' >Last Name</label>
              </div>
              <input  className='p-2 text-black w-[100%] mt-2 ' type="text" placeholder='lastname' />
            </div>
            <div  className=' w-[80%] m-auto ' >
              <div>
              <label htmlFor="Email" className='font-bold' >Email</label>
              </div>
              <input  className='p-2 text-black w-[100%] mt-2 '  type="text" placeholder='Email' />
            </div>
            <div className=' w-[80%] m-auto ' >
              <div>
              <label htmlFor="password" className='font-bold' >Password</label>
              </div>
              <input  className='p-2 text-black w-[100%] mt-2 '  type="text" placeholder='password' />
            </div>
            <div className='mt-4 mb-4  m-auto w-[100%]' >
              <button className=' py-2 border-black border rounded-md text-center w-[80%] flex justify-center m-auto bg-black text-white ' >Sign up</button>
              <div className='text-sm mt-3 text-pretty text-center font-bold ' >Already have an account? <Link to={'/login'} className='underline' >Login</Link> </div>
            </div>
            </div>
        </div>
    </Fragment>
  )
}

export default AuthPage