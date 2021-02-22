import React from "react"
export default function Blurb({
    data: { width, year, age, text, orientation, extras, extrasWidth },
  }) {
    return (
      <div className={`${width} ${orientation} border-b border-blue-500 pb-4 my-4 sm:my-6 `}>
        <Date age={age} year={year} />
        <div style={{ lineHeight: "32px" }} className="text-gray-600">
          {text}
          {extras &&
            extras.map(i => (
              <span key={i} className={`block py-4 ${extrasWidth} ml-auto`}>
                {i}
              </span>
            ))}
        </div>
      </div>
    )
  }
  
  const Date = ({ age, year }) => {
    return (
      <div className="flex items-end gap-1 font-heading">
        <p className="text-3xl  year">{year}</p>
  
        <div className="flex justify-center items-center z-30">
          <p className="w-7 h-7 rounded-full bg-white border border-blue-500 flex justify-center items-center">
            <span className="text-lg border-b border-gray-200">{age}</span>
          </p>
        </div>
      </div>
    )
  }
  