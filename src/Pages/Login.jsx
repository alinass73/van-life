import React from "react"
import { useLoaderData, useNavigate, Form, redirect, useActionData, useNavigation } from "react-router-dom"
import {loginUser} from "../../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({request}){
    const formData= await request.formData();
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname= new URL(request.url).searchParams.get("redirect") || "/"
    try{
        localStorage.setItem("loggedin", true)
        const data= await loginUser({email,password})
        return redirect(pathname)
    }catch(err){
        return err.message
    }
}

export default function Login(){
    // const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    // const [status, setStatus]= React.useState("idle");
    // const [error, setError]= React.useState(null);
    const errorMessage= useActionData();
    const message= useLoaderData();
    // const naviage= useNavigate();
    const navigation= useNavigation()
    console.log(navigation)
    // const error=

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     setStatus("submitting")
    //     setError(null)
    //     loginUser(loginFormData)
    //         .then(data=>naviage("/host",{replace: true}))
    //         .catch(err => setError(err))
    //         .finally(()=>setStatus("idle"))
    // }

    // function handleChange(e) {
    //     const { name, value } = e.target
    //     setLoginFormData(prev => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }

    return (
        <div className="px-6.5">
            <h1 className="font-bold text-[#161616] text-3xl text-center py-12">
                Sign in to your account
            </h1>
            {message && <h3 className="text-center text-red-600">{message}</h3>}
            {errorMessage && <h3 className="text-center text-red-600">{errorMessage}</h3>}
            {/* <h3 className="text-center text-red-600">{error}</h3> */}

            <Form className="pb-36" method="post" replace>
                <input className="bg-white w-full border border-[#D1D5DB] p-3 placeholder:text-[#4D4D4D] rounded-tr-xl rounded-tl-xl" type="email" name="email" placeholder="Email Address" />
                <input className="bg-white w-full border border-[#D1D5DB] p-3 placeholder:text-[#4D4D4D] rounded-br-xl rounded-bl-xl" type="password" name="password" placeholder="password" />
                <button disabled={navigation.state==="submitting"} className="inline-block text-center bg-[#FF8C38] border-0 w-full rounded-sm cursor-pointer transition-transform duration-100 ease-in-out font-bold text-white py-3 mt-7 disabled:bg-[#aaaaaa]"> {navigation.state === "submitting" ? "Logging In ..." : "Log In"} </button>
            </Form>
        </div>
    )
}