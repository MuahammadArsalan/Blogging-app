import { data } from 'autoprefixer';
import React from 'react'
import { useForm } from "react-hook-form"
import { getData, sendData } from '../Configuration/FirebaseMethod';

function Dashboard() {
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
    } , 'Blogs')
    console.log(send);

    let get =  await getData('Blog' ,uid)
     console.log(get);
    
  } catch (error) {
    console.log(error);
    
  }


}

return (

< >
<div style={{}} className='bg-base-300'>

  <h1>Dashboard</h1>


  <form onSubmit={handleSubmit(onSubmit)}>

  <input placeholder='Enter title' {...register("title" , { required: true })}
  />  <br /> <br />
  {errors.exampleRequired && <span>This field is required</span>}
  <input placeholder='Enter description' {...register("description" , { required: true })}
  />
  {errors.exampleRequired && <span>This field is required</span>}
<br /> <br />

<button className='btn btn-primary' onClick={addBlog}>Add Blog </button>

</form>


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
