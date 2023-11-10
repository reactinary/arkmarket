import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function NotFound() {
  return (
    <div className="flex items-center justify-center mt-40">
      <Link href="/explore/items">
        <Button variant="red">Explore</Button>
      </Link>
    </div>
  );
}
