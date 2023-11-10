import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "@radix-ui/react-icons"



export default function SortByDropdown() {
  return (
    <div className="hidden lg:flex  w-[250px] h-full items-center justify-center space-x-1 rounded-2xl bg-secondary">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="flex gap-2 px-2 shadow-none">
            <p className="text-lg">Price: Low to High</p>
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          alignOffset={-5}
          className="w-[200px] mt-2"
          forceMount
        >
          <DropdownMenuCheckboxItem checked>
            Price: Low to high
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Price: High to Low</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Recently listed</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Best offer</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Highest last sale</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Recently sold</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
