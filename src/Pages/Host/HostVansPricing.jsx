import React from "react";
import { Link, NavLink, useOutletContext, useParams } from "react-router-dom";
import clsx from "clsx";

export default function HostVansPricing() {
    const {currentVan} = useOutletContext()
  return (
    <div className="px-6.5 py-11">
      <h3 className="text-2xl text-[#161616] font-medium">${currentVan.price}<span>/day</span></h3>
    </div>
  );
}
