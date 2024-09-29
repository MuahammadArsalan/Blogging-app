import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form"
import { auth, loginUser } from '../Configuration/FirebaseMethod'
import { useNavigate } from 'react-router-dom'
import '/profile.css'
import { onAuthStateChanged } from 'firebase/auth'




function Login() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

let navigate =useNavigate()
let email = useRef()
let password = useRef()


function notAuser(){

  navigate('/register')
}

let loginUserFromFirebase = async(data )=>{

  console.log(data)
  
  try {
    
    let userLogin = await loginUser({
      email:data.email,
      password:data.password
    })
    console.log(userLogin)
    navigate('/')
  } catch (error) {
    console.error(error)
  }
  
}


function checkAuth(){
onAuthStateChanged(auth , (user)=>{
  if(user){
console.log(user.uid)
navigate('/dashboard')
  }
})

}



  return (

<>


<h1 className='text-center mt-10 text-4xl font-bold main-div' >Login</h1>

<form onSubmit={handleSubmit(loginUserFromFirebase)} className='main-div m-[auto] mt-[5rem] w-[20vw] text-center'>
  
{/* Email */}

<label  className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  {/* <input {...register("firstName")} */}
  <input type="email" placeholder='enter your email' {...register("email", { required: true })} /><br />
  {errors.email && <span className='text-danger'>This field is required</span>}
  {/* <input type="text" className="grow" placeholder="Email"  ref={email}/> */}
</label>
<br />


{/* Password */}

<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" placeholder='enter your password' {...register("password", { required: true })} /><br />
  {errors.password && <span className='text-danger'>This field is required</span>}  {/* <input type="password" placeholder='Password' className="grow"   ref={password}/> */}
</label>
 <br />

 <p className='cursor-pointer' onClick={notAuser}>Not a User? Register. </p> <br />
<button className='btn btn-primary w-[7rem] mt-1'  type='submit'onClick={checkAuth} >Login</button>

</form>




</>

  )
}

export default Login


