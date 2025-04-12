import React from "react"
import { Link, defer, Await, useLoaderData } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"
import { requireAuth } from "../../../utils"
import { getHostVan } from "../../../api"

export async function loader({ request }) {
    await requireAuth(request)
    return defer({ vans: getHostVan() })
}

export default function Dashboard() {
    const loaderData = useLoaderData()

    function renderVanElements(vans) {
        const hostVansEls = vans.map((van) => (
            <div className="flex items-center bg-white mb-3.5 py-4.5 px-6.5 w-full" key={van.id}>
                <img src={van.imageUrl} className="h-18 border-0 rounded-sm mr-4 " alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3 className="text-xl font-semibold m-2.5">{van.name}</h3>
                    <p className="m-2.5 ">${van.price}/day</p>
                </div>
                <Link to={`vans/${van.id}`} className="ml-auto">View</Link>
            </div>
        ))

        return (
            <div className="host-vans-list">
                <section>{hostVansEls}</section>
            </div>
        )
    }

    return (
        <>
            <section className="bg-[#ffead0] px-6.5 py-9 flex justify-between items-center">
                <div className="">
                    <h1 className="text-4xl text-[#161616]">Welcome!</h1>
                    <p className="text-[#4d4d4d] font-bold">Income last <span>30 days</span></p>
                    <h2 className="text-[#161616] font-black text-4xl">$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="bg-[#ffddb2] p-6.5 flex items-center ">
                <h2>Review score</h2>
                <BsStarFill className="text-[#ff8c38] ml-3.5 text-2xl " />
                <p className="ml-1 text-xl text-[#4d4d4d] mr-auto">
                    <span className="text-[#161616] font-bold ">5.0</span>/5
                </p>
                <Link to="reviews">Details</Link>
            </section>
            <section className="px-6.5 py-9">
                <div className="flex justify-between items-center">
                    <h2>Your listed vans</h2>
                    <Link to="vans" className="px-0">View all</Link>
                </div>
                <React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                </React.Suspense>
            </section>
        </>
    )
}
