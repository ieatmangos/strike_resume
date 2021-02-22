import React from "react"

const ImageGrid = ({ images, bg }) => {
  return (
    <div className={`flex p-4 sm:py-8 sm:px-6 md:px-8 lg:px-10 ${bg}`}>
      <div className="hidden sm:block sm:w-12" />
      <div
        style={{
          gridTemplateColumns: `1fr 2fr `,
          gridTemplateRows: `auto`,
        }}
        className="grid gap-2 sm:gap-5 "
      >
        {images.map(image => {
          return (
            <img
              key={image.src}
              className={`object-cover ${image.position}`}
              src={image.src}
              alt="entangled-tastes"
            />
          )
        })}
      </div>
    </div>
  )
}
export default ImageGrid
