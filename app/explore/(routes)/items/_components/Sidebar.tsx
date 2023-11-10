import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import SidebarDropdown from "./SidebarDropdown"
import { dropdownItems } from "@/constants/dropdownItems"



export default function Sidebar() {
  return (
    <Card>
      <div className="hidden md:flex flex-col gap-6 p-6 rounded-2xl w-[284px]">
        <p className="font-bold text-lg">Status</p>
        <div className="flex gap-4">
          <Button>All</Button>
          <Button variant="dark">Buy now</Button>
        </div>
        <div>
          <Separator/>
          <SidebarDropdown items={dropdownItems.price} />
          <Separator/>
          <SidebarDropdown items={dropdownItems.marketplace} />
          <Separator/>
          <SidebarDropdown items={dropdownItems.properties} />
        </div>
      </div>
    </Card>
  )
}
