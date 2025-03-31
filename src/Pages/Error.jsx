import React from "react"
import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()
    
     
    return (
        <h1 aria-live="assertive" className="text-center text-3xl font-bold text-[#161616] py-27">Error: {error.message}</h1>
    )
}