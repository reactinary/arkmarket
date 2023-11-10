'use client'
import { FilterBtn, Sidebar, LiveData, SortByDropdown, SortByBtns, NFTGrid, SearchBar } from "./_components";
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { fetchNFTs } from "@/lib/fetchNFTs"
import { results } from "@/constants/liveData"
import { FilteredNFT } from "@/types";



export default function ItemsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: NFTs, isLoading, isError, error } = useQuery({
    queryKey: ['NFTs'],
    queryFn: fetchNFTs
  });


  const filteredNFTs = NFTs ? NFTs.filter((NFT: FilteredNFT) =>
    NFT.metadata.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];


  return (
    <div className="flex flex-col gap-20">
      {/* ------ 🔎 FILTERS BAR 🔍 ------- */}
      <div className="flex justify-between items-center gap-6 h-[62px]">
        <FilterBtn />
        <LiveData results={results} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SortByDropdown />
        <SortByBtns />
      </div>

      {/* ----- 📜 RESULTS SECTION 📜 ------- */}
      <section className="flex gap-10 items-start">
        <Sidebar />
        <NFTGrid filteredNFTs={filteredNFTs} isLoading={isLoading} />
      </section>
    </div>
  )
}
