import React from "react"
import { Link, NavLink, useParams } from "react-router-dom";
import clsx from "clsx";
import { Outlet } from "react-router-dom";

export default  function HostVansInfo(){
    const [currentVan, setCurrentVan]= React.useState([]);
    const params= useParams();
    // console.log(params)
    React.useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=> setCurrentVan(data.vans))
        // console.log(data)
    },[])
    if(!currentVan)
    {
        return (
            <h1>Loading ..</h1>
        )
    }
    return (
      <div className=" py-14">
        <Link className="text-[#201F1D] text-base px-6.5" relative="path"  to=".."> &larr; <span className="font-medium underline">Back to all vans  </span></Link>
        <div className="bg-white">

        <div className="py-4.5 flex " >
            <div className="w-40 h-40">
                <img src={currentVan.imageUrl} className="pl-6 pt-6 w-full h-full object-cover" alt="" />
            </div>
            <div className="pl-5 py-6 flex w-2/3 flex-col justify-center ">
                <div className="pb-4 pt-7">
                    <i className={clsx(
                                    {
                                        "bg-[#161616]": currentVan.type === "luxury",
                                        "bg-[#115E59]": currentVan.type === "rugged",
                                        "bg-[#E17654]": currentVan.type === "simple",
                                    },
                                    "van-type py-1.5 px-3 h-[34px] font-medium not-italic border-none rounded-[5px] text-[#FFEAD0] transition-all duration-200 w-fit"
                                    )}
                                >
                                    {currentVan.type}
                                </i>

                </div>
                <h2 className="text-[#161616] font-bold text-2xl ">
                    {currentVan.name}
                </h2>
                <h3 className="text-[#4D4D4D] font-medium">
                   <span className="font-bold "> ${currentVan.price} </span>/day
                </h3>
                
            </div> 
            </div>
      <nav className="px-6.5">
        <NavLink end className= {({isActive})=>isActive ? "font-bold underline text-[#161616] pr-1 py-5" : "hover:underline px-1 py-5"} to=".">
          Details
        </NavLink>
        <NavLink className= {({isActive})=>isActive ? "font-bold underline text-[#161616] px-1 py-5" : "hover:underline px-1 py-5"} to="pricing">
          Pricing
        </NavLink>
        <NavLink className= {({isActive})=>isActive ? "font-bold underline text-[#161616] px-1 py-5" : "hover:underline px-1 py-5"} to="photos">
          Photos
        </NavLink>
      </nav>
        <Outlet context={{currentVan}}/>
      </div>
      </div>
    )
  }