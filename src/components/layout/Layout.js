import React from "react"
import SEO from "./SEO"
const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-white  font-heading">
        {children}
      </div>
    </>
  )
}

export default Layout
