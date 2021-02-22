import React from "react"
import BlurbList from "../components/BlurbList"
import ContactCard from "../components/ContactCard"
import NoteTo from "../components/NoteTo"
import WorkList from "../components/WorkList"

export default () => {
  return (
    <main className="">
      <NoteTo/>
      <BlurbList />
      <WorkList />
      <ContactCard />
    </main>
  )
}
