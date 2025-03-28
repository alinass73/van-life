import React from "react"
import { Link, NavLink, useOutletContext, useParams } from "react-router-dom";
import clsx from "clsx";

export default  function HostVansPhotos(){
    const { currentVan } = useOutletContext();    
    return (
      <div className="pl-6.5 py-14 flex ">
        <img src={currentVan.imageUrl} className="w-1/3" alt="" />
      </div>
    )
  }