import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="bg-[linear-gradient(0deg,rgba(0,0,0,0.46),rgba(0,0,0,0.46)),url('./assets/home.png')] no-repeat  bg-cover min-h-88 px-11 py-6 max-w-137" >
            <h1 className="font-bold text-4xl leading-10.5">You got the travel plans, we got the travel vans.</h1>
            <p className="leading-6">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="/" className="inline-block text-center bg-[#FF8C38] border-0 w-full rounded-sm cursor-pointer transition-transform duration-100 ease-in-out font-bold text-white py-3 mt-7">Find your van</Link>
        </div>
    )
}