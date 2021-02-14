import React from "react"
import SEO from "./SEO"
import Nav from "./Nav"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200">
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
