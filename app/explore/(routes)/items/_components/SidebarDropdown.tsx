import { ChevronDown } from "lucide-react";
import { useState } from "react";


export type SubItem = {
  title: string;
}

export type SidebarItem = {
  title: string;
  subItems: SubItem[];
}

export type SidebarDropdownProps = {
  items: SidebarItem;
}


export default function SidebarDropdown({ items }: SidebarDropdownProps) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="hover:bg-[#122f45] cursor-pointer block rounded-md transition-transform duration-300">
      <div className="flex text-lg justify-between" onClick={toggleOpen}>
        <div className="flex justify-between items-center w-full px-2 py-3 font-bold">
          {items.title}
          <ChevronDown />
        </div>
      </div>
      <div className={`overflow-hidden ${open ? "h-auto" : "h-0"}`}>
        {items.subItems.map((subItem, index) => (
          <a key={index} href="#" className="block p-3 rounded-md  hover:bg-[rgba(255,255,255,0.1)]">
            {subItem.title}
          </a>
        ))}
      </div>
    </div>
  );
};
