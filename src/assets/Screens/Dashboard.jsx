import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { auth, getData, sendData } from '../Configuration/FirebaseMethod';
import { onAuthStateChanged } from 'firebase/auth';

function Dashboard() {

let [Blogs , setBlogs] = useState([])
let [getUserInfo, setgetUserInfo] = useState([])


//get Blogs from firebase 

useEffect(() => {
try {
  
  onAuthStateChanged(auth , async(user)=>{
    if(user){
      // console.log(user.uid)
      let uid = user.uid
      const BlogsData = await getData(`Blogs`  , uid)
      console.log(BlogsData)
      setBlogs([...BlogsData])
    }
  })
} catch (error) {
  console.log(error);
  
}
}, []);


//get user information from firebase 

    
    
  // useEffect(()=>{

   

onAuthStateChanged(auth,async (user)=>{
  if(user){
    const get  = await getData('users' , user.uid)
console.log(get);
setgetUserInfo([...get])
console.log(getUserInfo);

  }
})
  // },[])
  





  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) =>{
    console.log(data)
addBlog(data)
  } 

async function addBlog (data){
  // console.log(data.title);
  // console.log(data.description);
  try {
    
    let send = await sendData({
      title:data.title,
      description:data.description,
      uid:auth.currentUser.uid
    } , 'Blogs')
    console.log(send)


Blogs.push({
  title:data.title,
  description:data.description,
})
setBlogs([...Blogs])
console.log(Blogs);



} catch (error) {
    console.log(error);
    
  }

  
}







return (
  
  < >
<div style={{width:"100vw",height:"max-content"}} className='bg-base-300'>

  <h1 className='font-bold text-4xl p-6 text-center'>Dashboard</h1>


  <form onSubmit={handleSubmit(onSubmit)} className='p-10 w-[60vw] m-auto h-[50vh] bg-white rounded-3xl '>

  <input className='p-4 ml-28 w-[30rem] h-[3rem] mt-5'   minLength={10} placeholder='Enter title'  style={{
    border:"1px solid grey " ,
    
  }} {...register("title" , { required: true })}
  />  <br /> <br />
  {errors.exampleRequired && <span>This field is required</span>}
  <textarea  placeholder='Whats in your mind'  minLength="100" className='w-[30rem] h-[6rem] align-text-top p-4  ml-28' style={{
    border:"1px solid grey"

  }}  {...register("description" , { required: true })}
  />
  {errors.exampleRequired && <span>This field is required</span>}
<br /> <br />

<button className='btn btn-primary m-auto text-center ml-28 mt-1 w-[10rem]' onClick={addBlog}>Publish Blog </button>

</form>





<div>

<h1  className='font-bold text-3xl mt-8 ml-72'>My Blogs</h1>


{Blogs.length > 0 ? Blogs.map((item , index)=>{

return  <div key={index} className='w-[60vw]'  style={{
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
  <h1 className='font-semibold text-xl'>{item.title.toUpperCase() }</h1>
  <br />
  <p className='mt-3'>{item.description }</p>
<div className='mt-5'>

<button className='btn btn-primary w-[5rem] ml-0 h-[2rem]'>DELETE</button>
<button className='btn btn-primary w-[5rem] ml-3 h-[2rem]'>EDIT</button>
</div>

</div>


}) : <h1  className='font-bold text-5xl p-6 text-center'>No Blog Found..</h1> }



</div>


</div>
</>
  )
}

export default Dashboard




{/* <h1 className='font-bold text-4xl mt-4 ml-3 font-sans'>Dashboard</h1>



<div className='bg-base-200 mt-6 h-[100vh]'>


{/* Add Blog box 

<form onSubmit={handleSubmit(onSubmit)}>

<form className='w-[40vw] h-[70vh] bg-white position-relative m-auto rounded-2xl'>

<input
  type="text"
  placeholder="Title"
  className="text-center mt-8 ml-28 input input-bordered input-md w-full max-w-xs" />



<br /> <br />
<label className="form-control">
  
  <textarea className="textarea textarea-bordered w-[25vw] m-auto"   rows="2" cols="10" placeholder="What's in your mind"></textarea>
  
</label>

<br />

<button className= 'w-[8rem] btn btn-primary m-auto text-center ml-52'>Publish Blog</button>

</form>



</div> */}
