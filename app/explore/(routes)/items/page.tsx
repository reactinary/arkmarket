'use client'
import { FilterBtn, LiveData, SortByDropdown, SortByBtns, NFTGrid, SearchBar, Sidebar } from "./_components";
import { results } from "@/constants/liveData"



export default function ItemsPage() {
  return (
    <div className="flex flex-col gap-20">
      {/* ------ 🔎 FILTERS BAR 🔍 ------- */}
      <div className="flex justify-between items-center gap-6 h-[62px]">
        <FilterBtn />
        <LiveData results={results} />
        <SearchBar />
        <SortByDropdown />
        <SortByBtns />
      </div>

      {/* ----- 📜 RESULTS SECTION 📜 ------- */}
      <section className="flex gap-10 items-start">
        <Sidebar />
        <NFTGrid />
      </section>
    </div>
  )
}
