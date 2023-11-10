'use client'
import Image from "next/image"
import { useState } from "react"
import { fullDescription } from "@/constants/fullDescription"


export default function CollectionDescription() {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

  const displayedDescription = isDescriptionExpanded
    ? fullDescription
    : fullDescription.slice(0, 150) + "..."


  return (
    <div className="max-w-[360px] md:max-w-[430px]">

      <div className="flex gap-4 mb-4">
        <Image src="/character.jpg" alt="character" width={100} height={100} className="rounded-md"/>
        <div>
          <h1 className="text-[36px] font-bold">Everai Heroes</h1>
          <p className="text-[14px] font-bold">Created By Screenshotlabs</p>
        </div>
      </div>
      <span>{displayedDescription}</span>
      <button
        className="ml-2 text-sm font-bold text-[#73B9EB]"
        onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
        {isDescriptionExpanded ? 'See less' : 'See more'}
      </button>
    </div>
  )
}
