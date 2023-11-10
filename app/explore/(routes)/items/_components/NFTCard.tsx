import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter,
DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"


type NFTCardProps = {
  id: string
  imageUrl: string
  name: string
}


export default function NFTCard({ id, imageUrl, name }: NFTCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Card
          className={cn("relative w-[207px] h-[330px] border border-sky-700 p-4", {
            'border-2 border-[#FF0000]': isHovered,
          })}
        >
          <Image src={imageUrl} alt="chracter" width={180} height={180} />

          <div className="mt-4">
            <p><strong>Everai {name}</strong></p>
            <p>0,07 ETH</p>
          </div>

          {isHovered && (
            <Dialog>
            <DialogTrigger asChild>
              <Button variant="red"
                className={cn("w-[180px] h-[48px]  rounded-xl mt-2  absolute bottom-[10px] left-[11px]")}>
                  Buy now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Work in progress</DialogTitle>
                <DialogDescription>
                  this feature will be available soon. Stay tuned!
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          )}
        </Card>
      </div>
    </>
  );
}
