import React, { useRef, useState } from 'react'
import { signUpUser, uploadImage } from '../Configuration/FirebaseMethod';
import { useNavigate } from 'react-router-dom';

function Register() {
  let [btn , setBtn] = useState('Register')

  let fullname =useRef();
let email =useRef();
let password =useRef();
let profileImage =useRef();
let navigate = useNavigate()
let loginUserFromFirebase =  async(event) => {

  event.preventDefault();
  console.log(fullname.current.value);
  console.log(email.current.value);
  console.log(password.current.value);
  console.log(profileImage.current.files[0]);

  let userProfileImgUrl ;
  
  userProfileImgUrl = await uploadImage(profileImage.current.files[0],email.current.value)
  
  
  try {
    const userData = await signUpUser({
      email: email.current.value,
      password: password.current.value,
      fullName: fullname.current.value,
      profileImage: userProfileImgUrl,
      
    })
    navigate('/login')
    console.log(userData);

  } catch (error) {
    alert(error)
    console.error(error);

  }


  
}

function register(){
  navigate('/login')
}

function loading (){
  setBtn('Loading...')
}

  return (

<>

<h1 className='text-center mt-10 text-4xl font-bold main-div'>Register</h1>


<form  onSubmit={loginUserFromFirebase} className='main-div m-[auto] mt-[5rem] w-[20vw] text-center'>

{/* FullName */}

<label className="input input-bordered flex items-center gap-2" >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input ref={fullname} type="text" className="grow" placeholder="FullName" />
</label>
<br />

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
  <input type="email" className="grow" placeholder="Email"  ref={email}/>
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
  <input type="password" className="grow" placeholder='password'  ref={password}/>
</label>
 <br />
{/* Profile Image */}


<label className="form-control w-full max-w-xs">

  <input type="file" ref={profileImage} className="file-input file-input-bordered w-full max-w-xs" />

</label>

<p className='cursor-pointer mt-5' onClick={register}>Already register? Login. </p> <br />


<button type='submit' className='btn btn-primary mt-0 w-[7rem]' onClick={loading}>{btn}</button>



</form>




</>
  )
}

export default Register











