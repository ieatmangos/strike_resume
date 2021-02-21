import React from "react"
import SEO from "./SEO"
import Nav from "./Nav"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-white px-6 md:px-8 lg:px-10 font-heading">
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
