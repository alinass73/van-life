import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="px-6.5 py-9.5">
            <h1 className="text-3xl text-[#161616] font-medium pb-3.5">Sorry, the page you were looking for was not found.</h1>
            <Link to="/" className="w-full text-white bg-[#161616] inline-block text-center border-0 rounded-sm py-2.5 px-3.5">Return to Home</Link>
        </div>
    )
}
