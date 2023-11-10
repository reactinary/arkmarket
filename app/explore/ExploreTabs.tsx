"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


const links = [
  {
    name: "Items",
    href: "/explore/items",
  },
  {
    name: "Analytics",
    href: "/explore/analytics",
  },
  {
    name: "Activity",
    href: "/explore/activity",
  },
]


interface FiltersBarProps extends React.HTMLAttributes<HTMLDivElement> {}


export default function ExploreTabs({ className, ...props }: FiltersBarProps) {
  const pathname = usePathname()

  return (
    <div className="relative my-8">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("my-4 flex gap-6 items-center", className)} {...props}>
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                pathname?.startsWith(link.href)
                  ? "font-bold border-b-[3px] border-red-500"
                  : ""
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}
