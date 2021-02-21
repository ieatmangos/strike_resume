import React, { useState } from "react"
import BlurbList from "../components/BlurbList"
import ContactCard from "../components/ContactCard"
import WorkList from "../components/work/WorkList"

export default () => {
  const [showContact, setShowContact] = useState(false)
  return (
    <main className="">
      <div className="p-6  text-gray-700">
      <div className='text-left'>
      <p>Jack,</p>
      <p className='text-gray-400'>I want to join your team. Please consider my application for Stike.</p>
      <div role='button' onClick={()=>setShowContact(c=>!c)}  className='text-gray-400 hover:text-blue-500'> - Gabriel Loubier</div>
      {showContact && <ContactCard/>}
      </div>
      </div>
      
      <BlurbList />
      <WorkList />
    </main>
  )
}
