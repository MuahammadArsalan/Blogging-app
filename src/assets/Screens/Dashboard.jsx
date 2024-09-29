import { data } from 'autoprefixer';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form"
import { auth, deleteDocument, getData, sendData } from '../Configuration/FirebaseMethod';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Dashboard() {


let [btn , setBtn] = useState('Publish Blog')
let [Blogs , setBlogs] = useState([])
let [getUserInfo, setgetUserInfo] = useState([])
let title= useRef('')
let desc= useRef('')

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

    // },[])
   


  async  function get(){
   try {
    const abc  = await getData("users" , auth.currentUser.uid
);
  //  console.log(abc);
   
    
   } catch (error) {
    console.log(error);
    
   }
  }
  get()



// onAuthStateChanged(auth,async (user)=>{
//   if(user){
//     const get  = await getData('users' , user.uid)
// console.log(get);
// setgetUserInfo([...get])
// console.log(getUserInfo)

//   }
// })
  





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
    // console.log(send)


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






function publish(){
  console.log(title.current.value);
  console.log(desc.current.value);
  
}

// useEffect(()=>{
  
//   onAuthStateChanged(auth,(user)=>{
//     async function dele(){
//       if (user) {
//         let id =  user.uid
//             let delObj = await deleteDocument(id ,'Blogs')
//         console.log(delObj);
        
//       }

//     }
//   })    
  
  
  

// },[])

const [details ,  setDetails] = useState([])

useEffect(()=>{

async function  avatarImage(){

  let getDetails = await getData('users' , auth.currentUser.uid)
  setDetails([...getDetails ])
  console.log(details)
}

avatarImage()
} , [])

let navigate = useNavigate()
function singleInfo(){
navigate('/singleUser')
}

return (
  
  < >
<div style={{width:"100vw",height:"max-content"}} className='bg-base-300'>

  <h1 className='font-bold text-4xl p-6 text-center main-div'>Dashboard</h1>
{/* publish blog div styling */}

{/*  className='p-10 w-[60vw] m-auto h-[50vh] bg-white rounded-3xl ' */}
<div className='flex justify-center align-middle main-div'>

  <form onSubmit={handleSubmit(onSubmit)} >

  <input className='p-4 ml-28 w-[30rem] h-[3rem] mt-5 rounded-2xl'  ref={title}  minLength={56} maxLength={60} placeholder='Enter title'  style={{
    border:"1px solid grey " ,
    
  }} {...register("title" , { required: true })}
  />  <br /> <br />
  {errors.exampleRequired && <span>This field is required</span>}
  <textarea  placeholder='Whats in your mind'  minLength="100" ref={desc} className='w-[30rem] max-h-fit align-text-top p-4  ml-28 rounded-2xl' style={{
    border:"1px solid grey"

  }}  {...register("description" , { required: true })}
  />
  {errors.exampleRequired && <span>This field is required</span>}
<br /> <br />

<button className='btn btn-primary m-auto text-center ml-28 mt-1 w-[10rem] ' onClick={addBlog}>{btn} </button>

</form>
</div>





<div className='main-div'>

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

{  details.length > 0 ? details.map((it)=>{
return <div>

<div className="avatar cursor-pointer" onClick={singleInfo}>
  <div className="w-12 rounded-xl">
    <img src={it.profileImage
} />

  </div>

<p className='danger ml-5'>{it.fullName}  : {it.email} </p>
</div>



</div>
  }) : <h1>Loaging...</h1>}

  <div className='flex flex-wrap'>

  <h1 className='font-semibold text-xl'>{item.title.toUpperCase()} </h1>
  </div>
  <br />
  <p className='mt-3'>{item.description }</p>
<div className='mt-5'>

{/* <button className='btn btn-primary w-[5rem] ml-0 h-[2rem]'>DELETE</button> */}

{/* <button className='btn btn-primary w-[5rem] ml-3 h-[2rem]'>EDIT</button> */}
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
