import React, { useEffect } from "react"
import { Link } from "react-router-dom"
export default  function HostVans(){
  const [vans ,setVans]= React.useState([])

  React.useEffect(()=>{
    fetch("/api/host/vans")
    .then(res=> res.json())
    .then(data=> setVans(data.vans))
  },[])

  const vanElements= vans.map((van)=>{
    return (
      <Link to={van.id} key={van.id} className=" my-3.5">
        <div className="py-4.5 flex">
          <div className="w-16 h-16">
            <img src={van.imageUrl} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="pl-4">
            <h2 className="text-[#161616] font-semibold text-xl ">
              {van.name}
            </h2>
            <h3 className="text-[#4D4D4D] font-medium">
              ${van.price}/day
            </h3>
          
        </div> 
        </div>
      </Link>
    )
  })
    return (
      <>
        <div className="px-7 pt-14 pb-8">
          <h1 className="text-[#161616] font-bold text-3xl pb-8">Your listed vans</h1>
          {vans.length > 0 ? vanElements : <h1>Loading ..</h1> }
        </div>
      </>
    )
  }