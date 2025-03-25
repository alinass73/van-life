import React from "react";
import bgImg from "../assets/bg-about-normal.png"
import { Link } from "react-router-dom";
export default function About(){
    return(
        <div className="bg-[#FFF7ED] text-[#161616]">
            <img src={bgImg} className="w-full h-60 object-cover " />
            <div className="px-6.5 pb-14">
                <h1 className="text-3xl font-bold pt-12 pb-8">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="font-medium text-lg">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <br />
                <p className="font-medium text-lg">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <section className="pb-12">
                <div className="mx-6.5 bg-[#FFCC8D] pb-13">
                    <h2 className="mx-9 font-bold text-2xl pt-8 pb-6">Your destination is waiting.<br />Your van is ready.</h2>
                    <Link className="mx-9 border-0 rounded-lg px-6 bg-[#161616] text-white py-4 " to="/vans">Explore our vans</Link>
                </div>
            </section>
        </div>
    )
}