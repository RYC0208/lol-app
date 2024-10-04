import { Item } from "@/types/Item";
import Image from "next/image";

interface ItemListProps {
  items: Item[];
  version: string;
  onItemClick: (item: Item) => void;
}

const ItemList = ({ items, version, onItemClick }: ItemListProps) => {
  return (
    <div className="flex flex-wrap gap-2 w-[600px]">
      {items
        .filter((item) => item.image.full !== "3599.png")
        .map((item) => (
          <div
            key={crypto.randomUUID()}
            className="flex flex-col items-center w-[45px] p-1 m-0 cursor-pointer gap-1"
            onClick={() => onItemClick(item)}
          >
            <div className="w-full h-full">
              <Image
                className="object-cover w-full h-full rounded"
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
                alt={item.name}
                width={30}
                height={30}
              />
            </div>
            <p className="text-yellow-600">{item.gold.total}</p>
          </div>
        ))}
    </div>
  );
};

export default ItemList;
