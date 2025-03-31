import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
export default  function ProfilePage(){
    return (
      <div className="max-w-137 mx-auto">
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    )
  }