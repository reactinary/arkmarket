import Image from "next/image"
import CollectionDescription from "./CollectionDescription"
import CollectionStats from "./CollectionStats"




export default function HeroSection() {
  return (
    <>
      {/* ------ BANNER ------ */}
      <Image src="/banner.jpg" alt="background" width={1920} height={500}/>


      <div className="container flex flex-col md:flex-row justify-between md:items-start sm:items-center mt-6  gap-4">
        <CollectionDescription />
        <CollectionStats />
      </div>
    </>
  )
}
