import React from "react"
import Dot from "./Dot"
import LinkOut from "./LinkOut"

const TextArea = ({ title, subtitle, li, link, bg }) => {
  const liStyle = `text-lg text-gray-400 flex items-start sm:items-center my-4`
  return (
    <div className="max-w-15 px-6 md:pl-8 lg:pl-10 mt-8">
      <div className="flex items-centergroup">
        <h3 className="text-4xl text-black-100  mr-4 ">{title}</h3>
        {link && (
          <a href={link}>
            <LinkOut />
          </a>
        )}
      </div>

      <div className={`h-2 w-8 ${bg}`}></div>
      <p className="text-2xl text-gray-300">{subtitle}</p>
      <ul className="ml-4 md:ml-8 my-6">
        {li.map(li => (
          <li className={`${liStyle}`}>
            <Dot />
        <span className='ml-2'>{li}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TextArea
