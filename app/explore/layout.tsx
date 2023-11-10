import { Metadata } from "next"
import ExploreTabs from "@/app/explore/ExploreTabs"
import HeroSection from "./HeroSection"


export const metadata: Metadata = {
  title: "Explore",
  description: "Explore the world of NFTs with Arkmarket, built on L2 Starknet.",
}

interface ExploreLayoutProps {
  children: React.ReactNode
}


export default function ExploreLayout({ children }: ExploreLayoutProps) {
  return (
    <>
      <div className="relative">
        <HeroSection />
        <section className="container">
          <ExploreTabs />
          <div>{children}</div>
        </section>
      </div>
    </>
  )
}
