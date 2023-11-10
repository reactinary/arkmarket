import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft } from "lucide-react"



function FilterBtn() {
  return (
  <Button className={cn( "h-full flex gap-2 text-lg")}   variant="secondary">
    <ChevronLeft />
    Filter
  </Button>
  )
}

export default FilterBtn
