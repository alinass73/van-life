import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function HostLayout(){
    // const activeStyle= {"font-bold underline text-[#161616] px-1 py-5" }
    return(
        <>
            <nav className="pl-6.5">
                <NavLink to=""
                end
                className={({isActive})=> isActive ? "font-bold underline text-[#161616] px-1 py-5" : "hover:underline px-1 py-5"}
                > Dashboard</NavLink>
                <NavLink to="income"
                className={({isActive})=> isActive ? "font-bold underline text-[#161616] px-1 py-5" : "hover:underline px-1 py-5"}
                > Income</NavLink>
                <NavLink to="vans"
                className={({isActive})=> isActive ? "font-bold underline text-[#161616] px-1 py-5" : "hover:underline px-1 py-5"}
                > Vans</NavLink>
                <NavLink to="reviews"
                className={({isActive})=> isActive ? "font-bold underline text-[#161616] px-1 py-5" : "hover:underline px-1 py-5"}
                > Reviews</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}