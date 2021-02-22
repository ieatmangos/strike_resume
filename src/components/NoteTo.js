import React, { useState } from "react"
import ContactCard from './ContactCard'

export default function NoteTo() {
    const [showContact, setShowContact] = useState(false)

    return (
        <div className="p-6  text-gray-700">
        <div className="text-left">
          <p>Jack,</p>
          <p className="text-gray-400 max-w-14 ml-2">
          I've worked for the past 5 years bringing my knowledge up to the level of the people in the blockchain movement, Bitcoin, and those contributing to the development of Web 3.0. I've changed my career path and my lifestyle, acquiring many skills that allow me to contribute to the future; and each sacrifice I’ve made has only intensified my resolve and furthered my intent.
           </p>
          <p className="text-gray-400 max-w-14 ml-2 mt-4">
          Like many, I still have a lot to learn, but I will contribute to the internet's democracy and the construction of a better, fairer future. I heard you are looking for a dedicated team with a similar vision. I want to join. Please consider this my application for a position as
            <span className="text-gray-800 border-b border-gray-200 mx-1">
               Front End Developer
            </span>
            at Strike.
          </p>
          <div
            role="button"
            onClick={() => setShowContact(c => !c)}
            className="text-gray-400 hover:text-blue-500 pt-2 underline"
          >
          
            - Gabriel Loubier
          </div>
          {showContact && <ContactCard />}
        </div>
      </div>
    )
}
