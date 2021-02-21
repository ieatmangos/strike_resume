import React from "react"
import LinkOut from "./LinkOut"

const CTA = ({ name, link, bg }) => {
  return (
    <div className="mx-auto py-5 mb-7 flex justify-end border-b ">
      <a target="_blank" rel="noreferrer" href={link ? link : "/"}>
        <div className="flex gap-4 items-center px-6 md:px-8 lg:px-10">
          <p className="text-lg text-gray-400 border-b border-gray-500">
            {name}
          </p>
          {link && <LinkOut />}
        </div>
      </a>
    </div>
  )
}

export default CTA
