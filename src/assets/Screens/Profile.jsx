import React, { useEffect, useState } from 'react'
import { auth, getData } from '../Configuration/FirebaseMethod'
import { useNavigate } from 'react-router-dom'

function Profile() {
const [profileBlogs , setProfileBlogs ] =  useState([])

let navigate =  useNavigate()
const BackJanaH = () =>{
  navigate('/')
}

useEffect(() => {

async function  getForProfilePage(){

  let getAllBlogFromsingleUser =await getData('Blogs' , auth.currentUser.uid)
  setProfileBlogs([...getAllBlogFromsingleUser])
  // console.log(profileBlogs)
}
getForProfilePage()

} , []);


  return (
<>
<div className='bg-base-300'>


<h1 className='ml-20 font-semibold text-3xl p-6'>All Blogs from this User</h1>

{profileBlogs.length > 0 ? profileBlogs.map((item)=>{


return <div key={item.uid}  className='w-[60vw]'  style={{
  // border:"1px solid grey",
  border:"none",
  backgroundColor:"white",
  borderRadius:"15px",
  marginLeft:"280px",
  marginTop:"30px",
  display:"inline-flex",
  alignItems:"center",
  flexWrap:"wrap",
  padding:"45px"
}}>
  <h1 className='font-semibold text-xl'>{item.title}</h1>
  <br />
  <p className='mt-3'>{item.description}</p>
<div className='mt-5'>

<button className='btn btn-primary w-[15rem] ml-0 h-[2rem]' onClick={()=> BackJanaH()}>Back to All</button>
</div>
</div>


}):   <h1  className='font-bold text-5xl p-6 text-center'>Loading..</h1>
}






</div>
</>  )
}

export default Profile