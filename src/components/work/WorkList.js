import React from "react"
import etMeat from "../../images/work/et-meat.png"
import et2 from "../../images/work/et-2.png"
import et5 from "../../images/work/et-5.png"
import sb1 from "../../images/work/sb-1.png"
import sb2 from "../../images/work/sb-2.png"
import sb3 from "../../images/work/sb-3.png"
import tb1 from "../../images/work/tb-1.png"
import tb2 from "../../images/work/tb-2.png"
import tb3 from "../../images/work/tb-3.png"
import bears4 from "../../images/work/bears-4.png"
import bears2 from "../../images/work/bears-2.png"
import bears3 from "../../images/work/bears-3.png"
import Work from "./Work"
import ContactCard from "../ContactCard"

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
      <ContactCard/>
    </div>
  )
}
const etData = {
  title: "Entangled Tastes",
  subtitle: "Personal: Community Grown Food Pairing",
  li: [
    "The goal was to help cook with tastes, smell, and creativity rather than a receipe.",
    "Combine ingredients together and see suggestions that pair well with all, ranked from 100% - 0%.",
    "Users have complete control over their pairings, letting me crowdsource the data from the public, and provide more accurate suggestions.",
    "Still needs a lot of work.",
  ],
  link: "https://entangledtastes.com",
  bg: "bg-et",
  images: [
    {
      src: et5,
      position: "",
    },
    {
      src: et2,
      position: "",
    },

    {
      src: etMeat,
      position: "col-span-2 w-1/2",
    },
  ],
}
const sbData = {
  title: "Starting Block",
  subtitle: "Professional: Inline Website Builder, React",
  li: [
      "Stamp out section variants and write Tailwind css inline to customize.",
      "Drag sections together to make pages.",
      "Export clean and responsive HTML and CSS.",
    "I'd have to ask my work before sharing a live link to this project.",
  ],
  link: null,
  bg: "bg-sb",
  images: [
    {
      src: sb3,
      position: "row-span-2",
    },
    {
      src: sb2,
      position: "",
    },
    {
      src: sb1,
      position: "col-start-2",
    },
  ],
}
const tbData = {
  title: "TB12",
  subtitle: "Professional: Headless E-Commerce, Next and Shopify",
  li: [
    "Built swatches from scratch.",
    "Integrated subscriptions services.",
    "Built tools in CMS and connected them to the front end.",
  ],
  link: "www.tb12sports.com",
  bg: "bg-tb12",
  images: [
    {
      src: tb2,
      position: "",
    },
    {
      src: tb1,
      position: "row-span-2",
    },
    {
      src: tb3,
      position: "",
    },
  ],
}
const bearsData = {
  title: "Send Bears",
  subtitle: "Personal: Product Company, React and Stripe",
  li: [
    "You can write anything on the bears t-shirt.",
    "The bear is delivered with it's hoodie zipped up so it's a suprise until they unzip it, like opening a letter in the mail.",
    "I've sold about 40 bears before realizing that its a marketing game and I'd rather code.",
  ],
  link: "www.sendbears.com",
  bg: "bg-bears",
  images: [
    {
      src: bears4,
      position: "",
    },
    {
      src: bears2,
      position: "",
    },
    {
      src: bears3,
      position: "col-span-2 ",
    },
  ],
}
