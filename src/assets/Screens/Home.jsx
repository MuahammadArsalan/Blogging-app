import React, { useEffect, useState } from 'react'
import { auth, getAllData } from '../Configuration/FirebaseMethod'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'


function Home() {
  
const [AllBlogsFromFirestore ,setAllBlogs ] =useState([])
const [details , setDetails ] =  useState([])

let navigate =  useNavigate()


  
  function profileParJanaH(){


    onAuthStateChanged(auth , (user)=>{
      if(user){
        // console.log(user.uid);
navigate('/profile')        
}else{
  alert('plz Login to switch profile ')
  navigate('/login')
}


    })
  }
  
const post = () => {

  onAuthStateChanged(auth , (user)=>{
    if(user){
      // console.log(user.uid);
navigate('/dashboard')
}else{
alert('plz Login for posting blogs ')
navigate('/login')
}


  })

}  

useEffect(()=>{

 async function  getAllBlogs(){
const allBlogs =  await getAllData('Blogs')
// console.log(allBlogs)
setAllBlogs([...allBlogs])

  }
getAllBlogs()



},[])


useEffect(() => {

  async function  avatarImage(){
  
    let getDetails = await getAllData('users')
    // console.log(getDetails)
    setDetails([...getDetails ])
    console.log(details)
  }
  
  // avatarImage()
  } , []);
  






  return (
<>
<div className='bg-base-300'>


<div className="btn-div flex flex-wrap justify-evenly">

<h1 className='text-center text-4xl p-6'>Good Morning Readers ! </h1>
<h1 className='p-8'><span className=''><button onClick={post} className='btn btn-primary p-4' >Post Blog </button></span></h1>
</div>
<h1 className='ml-72 font-semibold text-3xl mt-3'>All Blogs</h1>


{AllBlogsFromFirestore.length > 0 ? AllBlogsFromFirestore.map((item,index)=>{

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

{/*  Avatar wala kaam h is me jitne objects aarahe hn wo screen pr saare cardpar sara render ho raha h */}

{/* 

{
  details.length > 0 ? details.map((it)=>{
return <div>

<div className="avatar">
  <div className="w-12 rounded-xl">
    <img src={it.profileImage
} />

  </div>

<p className='danger ml-5'>{it.fullName}  : {it.email} </p>
</div>



</div>
  }) : <h1>akdjd</h1>
} */}



  <h1 className='font-semibold text-xl'>{item.title}</h1>
  <br />
  <p className='mt-3'>{item.description}</p>
<div className='mt-5'>

<button className='btn btn-primary w-[13rem] ml-0 h-[2rem]' onClick={()=> profileParJanaH()}>See All your posted Blogs</button>
</div>
</div>



}) :  <h1  className='font-bold text-5xl p-6 text-center'>Loading..</h1>

}


</div>
</> 

 )
}

export default Home