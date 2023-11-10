import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { ShoppingCart } from "lucide-react"




export default function NavBtns() {
  return (
    <div className="flex items-center justify-between space-x-2 md:justify-end  xl:w-full">
      <div className="flex gap-2 items-center">
        <Button variant="red">Connect</Button>
        <ShoppingCart />
        <ThemeSwitcher />
      </div>
    </div>
  )
}
