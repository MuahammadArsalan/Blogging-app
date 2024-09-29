import React, { useEffect, useState } from 'react'
import { auth, getData } from '../Configuration/FirebaseMethod'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'







function SingleUser() {

let [hour,setHour] = useState(new Date().getHours())
let [mint,setMint] = useState(new Date().getMinutes())

const [data , setData] = useState([])
const [sec , setSec] = useState([])

useEffect(()=>{
  
    
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log(user.uid)
        const uid =  user.uid
        
          try {
          const detailsGetting  =await getData('users' , uid)
          console.log(detailsGetting)
        setData([...detailsGetting])
        console.log(data)
        
          
        } catch (error) {
          console.log(error);
          
        }
        
      }
    })


},[])

let navigate =  useNavigate()
function back (){
  navigate('/profile');
}

  return (


<>

<div>
{
  data.length > 0 ? data.map((item)=>{
return <div className="m-auto flex justify-center mt-8 card bg-base-100 w-96 shadow-2xl">
  <figure className="px-10 pt-10">
    <img
      src={item.profileImage
      }
      alt="Shoes"
      className="rounded-xl h-[16rem] w-[17rem]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name : {item.fullName}</h2>
    <p>Email : {item.email}</p>
    <p>Date :  {new Date().getDate()}-{new Date().getMonth()+1}-{new Date().getFullYear()}</p>
    {/* <p>{(new Date().getTime() / 1000 / 60 /60 /24 /365.).toFixed(2) }</p> */}
<p>Time : {hour} : {mint} </p> 
    <div className="card-actions">
      <button className="btn btn-primary mt-2" onClick={back}>Back</button>
    </div>
  </div>
</div>


}): <h1  className='font-bold text-5xl p-6 text-center'>Loading...</h1>

}

</div>
</>  )
}

export default SingleUser