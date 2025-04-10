import { redirect, useSearchParams } from "react-router-dom"

export async function requireAuth(request) {
    const isLoggedIn = localStorage.getItem("loggedin")
    // const isLoggedIn = true
    const pathUrl= new URL (request.url).pathname
    if (!isLoggedIn) {
        throw redirect(`/login?message=You must log in first.&redirect=${pathUrl}`)
    }
    return null;
}