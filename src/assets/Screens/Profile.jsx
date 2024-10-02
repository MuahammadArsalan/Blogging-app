import React, { useEffect, useState } from 'react'
import { auth, getData } from '../Configuration/FirebaseMethod'
import { useNavigate } from 'react-router-dom'

import '/profile.css'

function Profile() {
const [profileBlogs , setProfileBlogs ] =  useState([])
const [details , setDetails ] =  useState([])

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
useEffect(() => {

async function  avatarImage(){

  let getDetails = await getData('users' , auth.currentUser.uid)
  setDetails([...getDetails ])
  console.log(details)
}

avatarImage()
} , [])


function singleInfo(){
  navigate('/singleuser')
}




  return (
<>
<div className='bg-base-300 main-div'>


{details.length > 0 ?details.map((iterator)=>{
  return <h1 className='ml-20 font-semibold text-3xl p-6'>All Blogs from {iterator.fullName}</h1>
}): <h1>Loading....</h1> 
}


{/* {profileBlogs && details.length > 0 ? profileBlogs && details.map((item)=>{ */}
{profileBlogs.length > 0 ? profileBlogs.map((item)=>{
{/* // {details.length > 0 ? details.map((item)=>{ */}


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

{
  details.length > 0 ? details.map((it)=>{
return <div>

<div className="avatar cursor-pointer" onClick={singleInfo}>
  <div className="w-12 rounded-xl">
    <img src={it.profileImage
} />

  </div>

<p className='danger ml-5'>{it.fullName}  : {it.email} </p>
</div>



</div>
  }) : <h1>Loaging...</h1>
}



  <h1 className='font-semibold text-xl'>{item.title}</h1>

  <br />
  <p className='mt-3'>{item.description}</p>
<div className='mt-5'>

<button className='btn btn-primary w-[7rem] ml-0 h-[2rem]' onClick={()=> BackJanaH()}>Back to All</button>
</div>
</div>


}):   <h1  className='font-bold text-5xl p-6 text-center'>Loading...</h1>
}






</div>
</>  )
}

export default Profile


// profile exporter