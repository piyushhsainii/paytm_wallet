import React, { Fragment } from 'react'

const AuthPage = () => {
  return (
    <Fragment>
        <div className='bg-black h-screen w-screen text-black ' >
            <div className='m-auto w-[30vw] '  >
                <h3>Sign Up</h3>
            </div>
            <div>
              Enter your information to create an account
            </div>
            <div>
              <label htmlFor="FirstName"></label>
              <input type="text" placeholder='Firstname' />
            </div>
            <div>
              <label htmlFor="Lastname"></label>
              <input type="text" placeholder='Lastname' />
            </div>
            <div>
              <label htmlFor="Email"></label>
              <input type="text" placeholder='Email' />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input type="text" placeholder='password' />
            </div>
            <div>
              <button>Sign up</button>
              <div>Already have an account? <Link>Login</Link> </div>
            </div>
        </div>
    </Fragment>
  )
}

export default AuthPage