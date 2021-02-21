import React from "react"

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
    text: `I went to ski in Snowbird, UT instead of accruing college debt. $800 in cash, I started. I got hired as a hotel housekeeper because it came with a season pass. It dumped 690 inches that winter, the all-time record still today. `,
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
    text: `GM on a mountain restaurant in Breckenridge Co. 60 employees. Sold a lot burgers and $6 gatorades while I learned about leadership and practiced growth strategies on satellite operations. I gave out more ski breaks than the other GM at the resort. This is where I learned that a corporate job is worse than they made it seem. `,
    orientation: `flex flex-col sm:flex-row gap-5 items-start lg:mr-auto`,
    width: "sm:w-14",
  },
  {
    year: 2016,
    age: 26,
    text: `I met Bitcoin at the peak dissatisfaction of my future. If I could catch up, I could ride with the momentum towards something meaniful. I had $10k in the bank. I figured I'd have more attempts if I wasn't paying rent in America. I quit, sold everything and moved to Vietnam. I was determined to work in the blockchain industry, as a restaurant manager.`,
    orientation: `flex flex-col sm:flex-row gap-5 items-start ml-auto`,
    width: "lg:w-16",
  },
  {
    year: 2017,
    age: 26,
    text: `I wrote blogs for ICO’s. They paid for sub par journalism and I created a portfolio of writing about the industry. I found a salary as a marketing intern with Rivetz. It was all about hardware attestation using the phone’s T.E.E. as  ‘blockchain worthy’ transactional intent. I was able to travel for 2 continuous years in over 8 countries. I filled up my passport as I wrote about their hardware security and its role in web 3.0. This is where I learned to trust the process.`,
    orientation: `flex flex-col sn:flex-row gap-5 items-start xl:mr-13`,
    width: `sm:w-14`,
    extras: [
      `Despite my marketing efforts, Rivets failed to deliver a product and went under. This is where I became familiar with the nuance between believing in an idea and building an idea. I am not a marketer, I am not a cat. I am a problem solver. `,
    ],
    extrasWidth: `sm:w-13`,
  },
  {
    year: 2018,
    age: 27,
    text: `Unemployed with a $25k run way, I decide I will teach myself how to code. Go big or go home, I commit.`,
    orientation: `flex flex-col gap-5 items-start `,
    width: `sm:w-13`,
  },
  {
    year: 2020,
    age: 28,
    text: `React Developer at Trellis, an ecommerce agency. My client work includes building headless Next and Gatsby sites. My role in their Innovation Team has me buiding a drag and drop ‘website builder’ with inline editing. Users write tailwind css while receving instant feedback. One click and they export clean and responsive html & css. “Designers handoff code, not figma files”. It's sick.`,
    width: `sm:w-14`,
    orientation: `flex flex-col gap-5 ml-auto`,
  },
  {
    year: 2021,
    age: 29,
    text: `I like my current role at Trellis. Stress free tenure to utilize a variety of technologies and encouraged to spend the time to iterate and improve. Life’s good, I just bought a house in VT. I am on a tradjectory to master React.`,
    width: `sm:w-15`,
    orientation: `flex flex-col gap-5 mr-auto sm:ml-8`,
    extras: [
      `JS was always just a gateway drug, building the democracy of the internet has been the end game. `,
      `Im 5 years deep figuring out how to make my way in. Learning chess pieces before playing the game. 5 years chasing the wave of Bitcoin. I’ll use web 3.0 to contribute to the future I believe in.`,
      `I heard the inviting words, “Betting against engineering is betting against life itself”. Im in, hoodies are in charge now. Fuck your suit.`,
    ],
    extrasWidth: `sm:w-13`,
  },
]

export default function BlurbList() {
  return <div className='flex flex-col gap-9 items-center my-13'>{data.map(blurb => {
    return <Blurb data={blurb} />
  })}</div>
}

function Blurb({
  data: { width, year, age, text, orientation, extras, extrasWidth },
}) {
  return (
    <div className={`${width} ${orientation} `}>
      <Date age={age} year={year} />
      <div style={{ lineHeight: "32px" }} className="text-gray-600">
        {text}
  {extras&& extras.map(i=><span className='block py-4'>{i}</span>)}
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