import React from "react"
import CTA from "./CTA"
import ImageGrid from "./ImageGrid"
import TextArea from "./TextArea"

const Work = ({ data: { title, subtitle, li, link, images, bg } }) => {
  return (
    <div className="">
      <TextArea
        title={title}
        subtitle={subtitle}
        li={li}
        link={link}
        images={images}
        bg={bg}
      />
      <ImageGrid bg={bg} images={images} />
      <CTA name={title} link={link} />
    </div>
  )
}

export default Work
