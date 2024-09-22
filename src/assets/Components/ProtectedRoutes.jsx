// import React, { Component, useEffect, useState } from 'react'
// import { auth } from '../Configuration/FirebaseMethod';
// import { useNavigate } from 'react-router-dom';

// function ProtectedRoute() {

// let [IsUser,setIsUser] = useState(false)
// let navigate = useNavigate()


// useEffect(()=>{
  
//   onAuthStateChanged(auth, (user) => {
//     if (user){
//       setIsUser(true)
//       return
//     }
//     navigate('/login')
//   })

// },[])

//       return (

// <>


// {setIsUser ? Component : <h1>Loading......</h1> }





// </>
//   )
// }

// export default ProtectedRoute








import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../Configuration/FirebaseMethod'
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ component }) => {
    const [isUser, setIsUser] = useState(false);

    // use navigate 
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsUser(true)
                return
            }
            navigate('/login')
        })
    }, [])
    return (
        setIsUser ? component : <h1>Loading...</h1>
    )
}

export default ProtectedRoutes