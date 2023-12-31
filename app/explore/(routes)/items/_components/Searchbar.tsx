
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';


type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};


export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="w-[700px] h-full relative text-[#73B9EB] focus-within:text-sky-400">
      <Search className="absolute ml-4 mt-4 pointer-events-none" />
      <Input
        className={cn('h-full pl-12 flex gap-2 text-lg rounded-2xl')}
        placeholder="Search NFTs by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
