import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
export default  function ProfilePage(){
    return (
      <>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </>
    )
  }