import React from "react";
import { useParams, useLocation, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { getVans } from "../../../api";
import { requireAuth } from "../../../utils";


export async function loader({params,request}){
  await requireAuth(request)
  return getVans(params.id)
}

export default function VnaDetail(){
    const params= useParams();
    const van= useLoaderData();
    // const [van, setVan]= React.useState(null);
    // const van= datas;
    const location= useLocation();
    console.log(location)

    const lastLocation= location.state?.search || "";
    // console.log(lastLocation)
    const typeLocation = location.state?.type || "all";
    // console.log(typeLocation)

    // const [loading, setLoading]= React.useState(false);
    // const [error, setError] = React.useState(null);
    
    // React.useEffect(()=>{
    //   async function loadVan() {
    //     setLoading(true)
    //     try{
    //       const data= await getVan(params.id);
    //       setVan(data)

    //     }catch(err)
    //     {
    //       setError(err)
    //     }finally{
    //       setLoading(false)
    //     }
    //   }
    //   loadVan()
    // }, [params.id])
    // if(loading){
    //   return <h1 aria-live="polite" className="text-center text-3xl font-bold text-[#161616] py-27">Loading... </h1>
    // }
    // if(error){
    //   return <h1 aria-live="assertive" className="text-center text-3xl font-bold text-[#161616] py-27"> {error.message} </h1>
    // }

    return (    
        <div className="px-6.5">
            <Link className="text-[#201F1D] text-base " relative="path" 
            to={`../?${lastLocation}`}> &larr; <span className="font-medium underline">Back to {typeLocation} vans  </span></Link>
            <img src={van.imageUrl} className="w-full pb-12.5 pt-10" alt="" />
            <i className={clsx(
                        {
                          "bg-[#161616]": van.type === "luxury",
                          "bg-[#115E59]": van.type === "rugged",
                          "bg-[#E17654]": van.type === "simple",
                        },
                        "van-type py-1.5 px-6.5 h-[34px] font-medium not-italic border-none rounded-[5px] text-[#FFEAD0] transition-all duration-200 selected"
                      )}
                    >
                      {van.type}
                    </i>
            <h1 className="text-[#161616] text-3xl font-bold pt-5 pb-2.5"> {van.name} </h1>
            <h2 className="text-[#161616] font-medium text-[20px] pb-2.5"> ${van.price}/day </h2>
            <p className="text-[#161616] font-medium text-base">
                {van.description}
            </p>
            <Link to="/" className="inline-block text-center bg-[#FF8C38] border-0 w-full rounded-sm cursor-pointer transition-transform duration-100 ease-in-out font-bold text-white py-3 my-7">Rent this van</Link>
        </div>
    )
}