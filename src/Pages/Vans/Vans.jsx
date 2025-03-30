import React from "react";
import clsx from "clsx";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { getVans } from "../../../api";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try{
        const data= await getVans();
        setVans(data)
      }catch(err){
        setError(err)
      }finally{
        setLoading(false)
      }
    }
    loadVans()
  }, []);
  
  const typeFilter = searchParams.get("type");
  console.log(searchParams.toString());
  const vanFiltered = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() == typeFilter)
    : vans;
  const vanElements = vanFiltered.map((van) => (
    <div key={van.id} className="">
      <Link
        state={{ search: searchParams.toString(), type: typeFilter }}
        to={van.id}
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
  const vanTypes = [...new Set(vans.map((van) => van.type))];
  // const activeClass=
  const linkTypes = vanTypes.map((type) => {
    const classLink = `text-[#4D4D4D] rounded-sm font-medium hover:text-white px-6 py-1.5 ${
      type === "luxury"
        ? "hover:bg-[#161616] "
        : type === "rugged"
        ? "hover:bg-[#115E59] "
        : type === "simple"
        ? "hover:bg-[#E17654] "
        : "null"
    } 
  ${
    typeFilter === "luxury" && type === "luxury"
      ? "bg-[#161616] text-white"
      : typeFilter === "rugged" && type === "rugged"
      ? "bg-[#115E59] text-white"
      : typeFilter === "simple" && type === "simple"
      ? "bg-[#E17654] text-white"
      : "bg-[#FFEAD0]"
  }
  `;
    // return <Link to={`?type=${type}`} className="text-[#4D4D4D] font-medium bg-[#FFEAD0] hover:text-white hover:bg-[] px-6 py-1.5"> {type} </Link>
    return (
      <NavLink to={`?type=${type}`} className={classLink}>
        {type} 
      </NavLink>
    );
  });
  linkTypes.push(
    <Link to="." className={`text-[#4D4D4D] font-medium underline px-6 py-1.5 ${typeFilter ? "visible" : "invisible"}`}>
      clear filters
    </Link>
  );

  if(loading){
    return <h1 aria-live="polite" className="text-center text-3xl font-bold text-[#161616] py-27">Loading... </h1>
  }
  if(error){
    return <h1 aria-live="assertive" className="text-center text-3xl font-bold text-[#161616] py-27"> {error.message} </h1>
  }
  return (
    <div className="px-6">
      <h1 className="text-3xl font-bold text-[#161616] pt-12 pb-5.5">
        Explore our van options
      </h1>
      <div className="flex justify-between flex-wrap items-center">
        {linkTypes}
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-8.5 py-13">
        {vanElements}
      </div>
    </div>
  );
}
