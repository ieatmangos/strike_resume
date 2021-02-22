import React from "react"
import Blurb from "./blurb/Blurb"

import { data } from "./blurb_data"

export default function BlurbList() {
  return (
    <div className="mt-4 bg-white-100">
      <h3 className="p-6 text-gray-200  border-t border-gray-200 text-2xl">
        LIFE
      </h3>
      <div className="flex flex-col items-center text-lg  px-6 md:px-8 lg:px-10">
        {data.map((blurb, index) => {
          return <Blurb key={`blurd-${index}`} data={blurb} />
        })}
      </div>
    </div>
  )
}
