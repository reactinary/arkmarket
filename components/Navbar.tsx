import { NavDesktop } from "./NavDesktop"
import { NavMobile } from "@/components/NavMobile"
import MainSearchBar from "./MainSearchBar"
import NavBtns from "./NavBtns"



export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex py-5 h-[92px] justify-between items-center gap-6 md:gap-65">
        <NavDesktop />
        <NavMobile />
        <MainSearchBar />
        <NavBtns />
      </div>
    </header>
  )
}
