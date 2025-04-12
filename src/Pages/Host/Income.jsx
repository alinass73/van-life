import React from "react"
import income from "../../assets/income-graph.png"
// import account from "../assets/account.svg"

export default function Income() {
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    return (
        <section className="px-6.5 text-[#161616]">
            <h1 className="font-bold text-4xl pt-3">Income</h1>
            <p className="text-[#4d4d4d] pt-11">
                Last <span className="underline">30 days</span>
            </p>
            <h2 className="text-4xl font-black pt-7.5 pb-11">$2,260</h2>
            <img
                className="max-w-[500px] "
                src={income}
                alt="Income graph"
            />
            <div className="pt-16 flex justify-between pb-8">
                <h3 className="text-2xl font-bold" >Your transactions (3)</h3>
                <p className="text-[#4d4d4d]">
                    Last <span className="underline font-bold ">30 days</span>
                </p>
            </div>
            <div className="transactions">
                {transactionsData.map((item) => (
                    <div key={item.id} className="flex px-7 py-9 justify-between">
                        <h3 className="text-[#161616] text-4xl font-semibold ">${item.amount}</h3>
                        <p className="text-[#4D4D4D] text-xl " >{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
