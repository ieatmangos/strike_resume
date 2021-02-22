import React from "react"
import {tbData,sbData,etData,bearsData} from './work_data'
import Work from "./work/Work"

export default function WorkList() {
  return (
    <div>
      <h3 className="p-6 text-gray-200  border-t border-gray-200 text-2xl">
        CODE
      </h3>
      <Work data={tbData} />
      <Work data={sbData} />
      <Work data={etData} />
      <Work data={bearsData} />
    </div>
  )
}
