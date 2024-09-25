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
<div style={{width:"100vw",height:"400vh"}} className='bg-base-300'>

  <h1 className='font-bold text-4xl p-6 text-center'>Dashboard</h1>


  <form onSubmit={handleSubmit(onSubmit)} className='p-10 w-[60vw] m-auto h-[90vh] bg-white rounded-3xl '>

  <input className='p-4 ml-28 w-[30rem] h-[3rem] mt-5' placeholder='Enter title'  style={{
    border:"1px solid grey " ,
    
  }} {...register("title" , { required: true })}
  />  <br /> <br />
  {errors.exampleRequired && <span>This field is required</span>}
  <input  placeholder='Whats in your mind' className='w-[30rem] h-[6rem] align-text-top p-4  ml-28' style={{
    border:"1px solid grey"

  }}  {...register("description" , { required: true })}
  />
  {errors.exampleRequired && <span>This field is required</span>}
<br /> <br />

<button className='btn btn-primary m-auto text-center ml-28 mt-1 w-[10rem]' onClick={addBlog}>Publish Blog </button>

</form>





<div>

<h1  className='font-bold text-3xl mt-8 ml-72'>My Blogs</h1>



<div className='w-[60vw]'  style={{
  border:"1px solid grey",
  backgroundColor:"white",
  borderRadius:"15px",
  marginLeft:"280px",
  marginTop:"30px",
  display:"inline-flex",
  alignItems:"center",
  flexWrap:"wrap"
}}>
  <p>aknakdnkndkan</p>
  <p>Lorem, ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem rem ipsa harum eaque modi odio officia porro accusantium dolorem obcaecati. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, minus voluptate. Porro sit cumque officia aliquam doloribus dicta quasi facilis!  dorepellat soluta architecto corporis. Distinctio tempora cumque quibusdam? Eaque, blanditiis beatae? Dolore aspernatur molestiae hic deserunt numquam vel reprehenderit aperiam quas itaque in minima consectetur, ex veniam et ratione ab sunt consequuntur recusandae!</p>
</div>



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
