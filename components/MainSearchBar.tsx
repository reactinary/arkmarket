import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';


export default function MainSearchBar() {
  return (
    <div className="relative text-[#73B9EB]  sm:w-full  xl:min-w-[500px] ">
      <Search className="absolute ml-[16px] mt-[7px] pointer-events-none" />
      <Input
        className={cn('pl-12 flex gap-2')}
        placeholder="Search Nft, collections and account "
      />
    </div>
  );
}
