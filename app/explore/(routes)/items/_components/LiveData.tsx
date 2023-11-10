import Image from "next/image";


type LiveDataProps = {
  results: number;
}

export default function LiveData({results}: LiveDataProps) {
  return (
    <div className="hidden md:flex justify-center items-center   min-w-[150px] max-w-[150px]  border">
      <Image src="/elipse.png" alt="image result" width={50} height={50} />
      <p className="w-full">{results} results</p>
    </div>
  )
}
