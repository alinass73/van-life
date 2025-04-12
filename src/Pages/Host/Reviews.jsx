import React from "react"
import { BsStarFill } from "react-icons/bs"
import reviews from "../../assets/reviews-graph.png"

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 3,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    
    return (
        <section className="px-6.5">
            <div className="flex pt-8 pb-8 items-end justify-between ">
                <h2 className="text-[#161616] text-3xl font-bold">Your reviews</h2>
                <p className="text-[#4D4D4D] font-medium text-base ">
                    Last <span className="font-bold underline">30 days</span>
                </p>
            </div>
            <img
                className="w-full pb-9"
                src={reviews}
                alt="Review graph"
            />
            <h3 className="text-[#161616] pb-5">Reviews (2)</h3>
            {reviewsData.map((review) => (
                <div key={review.id} className="pb-16">
                    <div className="py-6">
                        <div className="flex text-[#FF8C38] pb-2">
                            {[...Array(review.rating)].map((_, i) => (
                                <BsStarFill className="review-star" key={i} />
                            ))}
                        </div>
                        <div className="flex pb-1.5">
                            <p className="text-[#161616] font-semibold pr-3.5">{review.name}</p>
                            <p className="text-[#8C8C8C] font-semibold">{review.date}</p>
                        </div>
                        <p>{review.text}</p>
                    </div>
                    <hr className="" />
                </div>
            ))}
        </section>
    )
}