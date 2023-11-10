import { Button } from "@/components/ui/button";
import {LayoutGrid, List } from "lucide-react";



export default function SortByBtns() {
  return (
    <div className="hidden lg:flex gap-2   dark:bg-[#0E2230] p-2">
      <Button variant="darkblue">
        <LayoutGrid color="#ffffff" />
      </Button>
      <Button variant="secondary">
        <List color="#ffffff" />
      </Button>
    </div>
  )
}
