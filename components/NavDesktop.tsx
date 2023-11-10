"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"


export function NavDesktop() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden lg:flex gap-8">
      <Link className=" mr-6 flex items-center space-x-2"
        href="/"
        >
        <Image src="/logo.png" alt="Logo Arkmarket" width={60} height={60}/>
        <span className="hidden font-bold sm:inline-block text-[24px]">
          ArkMarket
        </span>
      </Link>

      <nav className="flex items-center space-x-6">
        <Link
          href="/explore"
          className={cn(
            "hover:text-[#EA505A]",
            pathname?.startsWith("/explore")
            ? "text-[#EA505A] font-bold"
            : "font-bold text-foreground"
          )}
        >
          Explore
        </Link>
        <Link
          href="/create"
          className={cn(
            "hover:text-[#EA505A]",
            pathname?.startsWith("/create")
              ? "text-[#EA505A] font-bold"
              : "font-bold text-foreground"
          )}
        >
          Create
        </Link>
        <Link
          href="/vision"
          className={cn(
            "hover:text-[#EA505A]",
            pathname?.startsWith("/vision")
            ? "text-[#EA505A] font-bold"
            : "font-bold text-foreground"
          )}
        >
          Vision
        </Link>
      </nav>
    </div>
  )
}
