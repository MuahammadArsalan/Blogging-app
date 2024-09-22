import React from 'react'

function Dashboard() {
  return (
<>
<h1 className='font-bold text-4xl mt-4 ml-3 font-sans'>Dashboard</h1>



<div className='bg-base-200 mt-6 h-[100vh]'>


{/* Add Blog box */}


<div className='w-[40vw] h-[70vh] bg-white position-relative m-auto rounded-2xl'>

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

</div>



</div>

</>
  )
}

export default Dashboard