import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cardData } from "@/constants/cardData";


type CardDataProps = {
  title: string;
  content: string | number;
};

type InfoCardProps = {
  cardData: CardDataProps;
};


export default function CollectionStats() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-2  lg:grid-cols-3  gap-2">
      {cardData.map((item, index) => (
        <Card key={index} className={cn("p-[14px] w-[120px] sm:w-[150px] md:w-[160px] h-[76px]")}>
          <p className="text-[12px] sm-text-[14px] text-sky-400">{item.title}</p>
          <p className="text-[14px] sm:text-[16px]">{item.content}</p>
        </Card>
      ))}
    </div>
  );
}
