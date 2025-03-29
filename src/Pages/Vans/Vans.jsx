import React from "react";
import clsx from "clsx";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
      
    }, []);
    // let classsName=;
    // React.useEffect()
    // console.log(searchParams.get("type"));
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter= searchParams.get("type");  
  const vanFiltered= typeFilter ?  vans.filter((van)=> van.type.toLowerCase()== typeFilter) : vans;
  const vanElements = vanFiltered.map((van) => (
    <div key={van.id} className="">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, 
      priced at $${van.price} per day`}
        className="space-y-2"
      >
        <img
          src={van.imageUrl}
          className=" max-w-full rounded-sm"
          alt={`Image of ${van.name}`}
        />
        <div className="">
          <h3> {van.name} </h3>
          <p>
            ${van.price} <span>/day</span>
          </p>
        </div>
        <i
          className={clsx(
            {
              "bg-[#161616]": van.type === "luxury",
              "bg-[#115E59]": van.type === "rugged",
              "bg-[#E17654]": van.type === "simple",
            },
            "van-type py-1.5 px-6.5 font-medium not-italic border-none rounded-[5px] text-[#FFEAD0] transition-all duration-200 selected"
          )}
          // {`van-type px-1.5 py-3.5 h-[34px] font-medium not-italic border-none rounded-[5px] bg-[#FFEAD0] text-[#4D4D4D] transition-all duration-200 selected`}
        >
          {van.type}
        </i>
      </Link>
    </div>
  ));
  // const [vanTypes, setVanTypes]= React.useState([])

  // // const vansTypes= vans.map((van)=>(setVanTypes(vanTypes.includes(van.type) ? prevVan : [...prevVan,van.type] )))
  const vanTypes = [...new Set(vans.map(van => van.type))]
  const linkTypes= vanTypes.map((type) =>{
  const classLink=`text-[#4D4D4D] bg-[#FFEAD0] rounded-sm font-medium  hover:text-white ${
    type === "luxury" ? "hover:bg-[#161616]": (type === "rugged" ? "hover:bg-[#115E59]" :(type === "simple" ? "hover:bg-[#E17654]" : null))
  } px-6 py-1.5`
    // return <Link to={`?type=${type}`} className="text-[#4D4D4D] font-medium bg-[#FFEAD0] hover:text-white hover:bg-[] px-6 py-1.5"> {type} </Link>
    return <Link to={`?type=${type}`} className={classLink}> {type} </Link>
  })
  linkTypes.push(
    <Link to="." className="text-[#4D4D4D] font-medium underline px-6 py-1.5">
      clear filters
    </Link>
  );
  return (
    <div className="px-6">
      <h1 className="text-3xl font-bold text-[#161616] pt-12 pb-5.5">Explore our van options</h1>
      <div className="flex justify-between">
        {linkTypes}
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-8.5 py-13">
        {vanElements}
      </div>
    </div>
  );
}
