import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Van() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  // let classsName=;

  const vanElements = vans.map((van) => (
    <div key={van.id} className="">
      <Link to={`/vans/${van.id}`} 
      aria-label={`View details for ${van.name}, 
      priced at $${van.price} per day`}
      > 
        <img src={van.imageUrl} className=" max-w-full rounded-sm" alt={`Image of ${van.name}`}  />
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
  return (
    <div className="px-6">
      <h1 className="text-3xl font-bold">Explore our van options</h1>
      <div className="grid grid-cols-2 justify-items-center gap-8.5 py-13">
        {vanElements}
      </div>
    </div>
  );
}
