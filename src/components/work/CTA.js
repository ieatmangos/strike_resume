import React from "react"
import LinkOut from "./LinkOut"

const CTA = ({ name, link }) => {
  return (
    <div className="mx-auto py-5 mb-7 flex justify-end border-b ">
      <div className="flex items-center px-6 md:px-8 lg:px-10">
        <p className="text-lg mr-4 text-gray-400 border-b border-gray-500">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={link ? link : "/"}
          >
            {name}
          </a>
        </p>
        <a
            className=""
            target="_blank"
            rel="noreferrer noopener"
            href={link ? link : "/"}
          >
        {link && <LinkOut />}
        </a>
      </div>
    </div>
  )
}

export default CTA
