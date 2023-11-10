import Image from "next/image"
import CollectionDescription from "./CollectionDescription"
import CollectionStats from "./CollectionStats"




export default function HeroSection() {
  return (
    <>
      {/* ------ BANNER ------ */}
      <Image src="/banner.jpg" alt="background" width={1920} height={500}/>


      <div className="container">
        <CollectionDescription />
        <CollectionStats />
      </div>
    </>
  )
}
