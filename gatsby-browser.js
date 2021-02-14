import React from "react"
import Layout from "./src/components/layout/Layout"
import "./src/css/tailwind.css"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return (
    <>
      {/* Provider go here */}
      {element}
    </>
  )
}
