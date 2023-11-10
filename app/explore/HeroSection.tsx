import Image from "next/image"
import CollectionDescription from "./CollectionDescription"
import CollectionStats from "./CollectionStats"




export default function HeroSection() {
  return (
    <>
      {/* ------ BANNER ------ */}
      <Image src="https://res.cloudinary.com/dzsyv502k/image/upload/v1699614893/Banner_bw77ul.jpg" alt="background" width={1920} height={500}/>

      <div className="container flex flex-col md:flex-row justify-between md:items-start sm:items-center mt-6  gap-4">
        <CollectionDescription />
        <CollectionStats />
      </div>
    </>
  )
}
