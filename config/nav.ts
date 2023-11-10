import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface NavConfig {
  mainNav: MainNavItem[]
}


export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Explore",
      href: "/explore",
    },
    {
      title: "Create",
      href: "/create",
    },
    {
      title: "Vision",
      href: "/vision",
    },
  ],
}
