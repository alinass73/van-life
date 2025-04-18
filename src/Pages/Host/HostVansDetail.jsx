import React from "react";
import { Link, NavLink, useLoaderData, useParams } from "react-router-dom";
import clsx from "clsx";
import { getVan } from "../../../api";
import { requireAuth } from "../../../utils";
// import { useOutletContext } from "react-router-dom";

export async function loader({params,request}){
  await requireAuth(request);
  return getVan(params.id)
}
export default function HostVansDetail() {
  // const { currentVan } = useOutletContext();
  const currentVan = useLoaderData();


  return (
    <div className="pl-6.5 py-7 space-y-3.5">
      <h4 className="text-sm"> <span className="font-bold"> Name:</span> {currentVan.name}</h4>
      <h4 className="text-sm"> <span className="font-bold"> Category:</span> {currentVan.type}</h4>
      <h4 className="text-sm"> <span className="font-bold"> Description:</span> {currentVan.description}</h4>
      <h4 className="text-sm"> <span className="font-bold"> Visibility:</span> public</h4>
    </div>
  );
}
