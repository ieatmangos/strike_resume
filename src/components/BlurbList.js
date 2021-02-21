import React from "react"
import ContactCard from "./ContactCard"

const data = [
  {
    year: 1991,
    age: 0,
    text: `Gabriel Loubier`,
    orientation: `flex gap-4 items-center mr-auto sm:mr-0 `,
    width: `w-12`,
  },
  {
    year: 2008,
    age: 16,
    text: `School newspaper. I learned if you pursue knowledge it’s not work, it’s fun.`,
    orientation: `flex gap-4 items-start sm:ml-10`,
    width: `sm:w-13`,
  },
  {
    year: 2011,
    age: 19,
    text: `I went to ski in Snowbird, UT instead of accruing college debt. I got hired as a hotel housekeeper because it came with a season pass. It dumped 690 inches that winter, the Bird's all-time record still today. `,
    orientation: `flex flex-col gap-5 items-start mr-auto sm:ml-9`,
    width: `sm:w-14`,
  },
  {
    year: 2014,
    age: 23,
    text: `GM of Co, an asian restaurant in downtown Charleston, SC. 18 employees and 1.6 million in revenue. I tasted building with momentum. `,
    orientation: `flex flex-col sm:flex-row  gap-5 items-start sm:ml-12`,
    width: `sm:w-14`,
  },
  {
    year: 2016,
    age: 25,
    text: `GM on a mountain restaurant in Breckenridge Co. 60 employees. Sold a lot burgers and $6 gatorades while I learned about leadership and practiced growth strategies. I gave out more ski breaks than the other GM at the resort. This is where I learned that a corporate job is worse than the Matrix made it seem. `,
    orientation: `flex flex-col sm:flex-row gap-5 items-start lg:mr-auto`,
    width: "sm:w-14",
  },
  {
    year: 2016,
    age: 26,
    text: `I met Bitcoin when I was desperate for a meaningful career. If I could catch up, I could ride with the momentum. I had $10k in the bank. I figured I'd have more time if I wasn't paying rent in America. I quit, sold everything and moved to Vietnam. I was determined to work in the blockchain industry, as a restaurant manager.`,
    orientation: `flex flex-col sm:flex-row gap-5 items-start ml-auto`,
    width: "lg:w-16",
  },
  {
    year: 2017,
    age: 26,
    text: `I started writing blogs for ICO’s. I found a salary as a marketing intern with Rivetz. It was all about hardware attestation using the phone’s T.E.E. as  ‘blockchain worthy’ transactional intent. I was able to travel for 2 continuous years in over 8 countries. I filled up my passport as I wrote about their hardware security and its role in web 3.0. This is where I learned to trust the process and enjoy the ride.`,
    orientation: `flex flex-col sn:flex-row gap-5 items-start xl:mr-13`,
    width: `sm:w-14`,
    extras: [
      `Rivetz failed to deliver a product and went under. So this is also where I learned the nuance between believing in an idea and actually building it. I am not a marketer, I am not a cat. I am a problem solver. `,
    ],
    extrasWidth: `sm:w-13`,
  },
  {
    year: 2018,
    age: 27,
    text: `Unemployed with $25k in savings as a run way, I decide I will teach myself how to code. Go big or go home, I commit.`,
    orientation: `flex flex-col gap-5 items-start `,
    width: `sm:w-13`,
  },
  {
    year: 2020,
    age: 28,
    text: `React Developer at Trellis, an ecommerce agency. My client work includes building headless Next and Gatsby sites. My recent promotion to their Innovation Team has me buiding a drag and drop ‘website builder’ with inline editing. “Designers handoff code, not figma files”. It's sick, I show screenshots below.`,
    width: `sm:w-14`,
    orientation: `flex flex-col gap-5 ml-auto`,
  },
  {
    year: 2021,
    age: 29,
    text: `I'm getting paid to iterate, learn, and master React. Life’s good, I just bought a house in VT. I am on a solid tradjectory.`,
    width: `sm:w-15`,
    orientation: `flex flex-col gap-5 mr-auto sm:ml-8`,
    extras: [
      `JS was always just a gateway drug, building the internet's democracy is the end game. `,
      `I'm 5 years deep into figuring out how my way to contribute. Learning chess pieces before playing the game. 5 years chasing the wave of Bitcoin. I’ll use web 3.0 to build the future I believe in. It's not if, but when.`,
      `When I watched your videos words, “Betting against engineering is betting against life itself”. I realized the time is now. I'm in. Hoodies are in charge now.`,
      `How can I help?`,
    ],
    extrasWidth: `sm:w-14`,
  },
]

export default function BlurbList() {
  return (
    <div className='my-4'>

      <h3 className="p-6 text-gray-200  border-t border-gray-200 text-2xl">
        LIFE
      </h3>
      <div className="flex flex-col gap-9 items-center  px-6 md:px-8 lg:px-10">
        {data.map((blurb, index) => {
          return <Blurb key={`blurd-${index}`} data={blurb} />
        })}
      </div>
      <ContactCard/>
    </div>
  )
}

function Blurb({
  data: { width, year, age, text, orientation, extras, extrasWidth },
}) {
  return (
    <div className={`${width} ${orientation} border-b border-blue-500 pb-4 `}>
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
