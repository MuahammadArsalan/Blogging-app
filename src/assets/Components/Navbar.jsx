import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { auth, signOutUser } from '../Configuration/FirebaseMethod';
import { signOut } from "firebase/auth";

const Navbar = () => {

  const [userIs, setUserIs] = useState(false);

  // use navigate 
  const navigate = useNavigate()
  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
              setUserIs(true)
              return
          }
          else{
            setUserIs(false)

          }
      })
  }, [userIs])


let logout = async() => {

 await signOut(auth).then(() => {
    console.log('Sign-out successful.');
    setIsUser(false)
    alert('Logout Successfully!')
    
  }).catch((error) => {
    // An error happened.
  });

  navigate('/login')
}
let bloggingAppClickNav = () => {
  navigate('/')
}

  return (

<>




   <div className="navbar bg-primary flex justify-between main-div" >


    
    <div>

   <a className="btn btn-ghost text-xl text-white" onClick={bloggingAppClickNav}>Blogging App</a>
    </div>

  <div className='flex justify-center text-white gap-7 mr-5'>

  <h5><NavLink to='/'>Home</NavLink></h5>
     <h5><NavLink to='/dashboard'>Dashboard</NavLink></h5>
     <h5><NavLink to='profile'>profile</NavLink></h5>
     <h5><NavLink to='login'>Login</NavLink></h5>
     <h5><NavLink to='register'>Register</NavLink></h5>

     <h5 className='cursor-pointer' onClick={logout}>Logout</h5>


{/*
{setUserIs  ? (
<>

  <h5><Link to='/'>Home</Link></h5>
     <h5><Link to='dashboard'>Dashboard</Link></h5>
     <h5><Link to='profile'>profile</Link></h5>
     <h5 className='cursor-pointer' onClick={logout}>Logout</h5>

</> ):(

  <>

<h5><Link to='/'>Home</Link></h5>
     <h5><Link to='login'>Login</Link></h5>
     <h5><Link to='register'>Register</Link></h5>


</>
) 
}
      */}


   </div>

</div>

</>
)
}

export default Navbar










// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { signOutUser } from '../Configuration/FirebaseMethod'
// import setIsUser from './ProtectedRoutes'
// const Navbar = () => {

//   // useNavigate
//   const navigate = useNavigate()

//   const logoutUser = async () => {
//     const user = await signOutUser();
//     setIsUser(false)
//     console.log(user);
//     navigate('login')
//   }
//   return (
//     <>
//       <div className='d-flex justify-content-center gap-5 m-5'>
//         <h5><Link to=''>Home</Link></h5>
//         <h5><Link to='dashboard'>Dashboard</Link></h5>
//         <h5><Link to='profile'>profile</Link></h5>
//         <h5><Link to='login'>Login</Link></h5>
//         <h5><Link to='register'>Register</Link></h5>
//         <h5 className='cursor-pointer' onClick={logoutUser}>Logout</h5>
//       </div>
//     </>
//   )
// }

// export default Navbar