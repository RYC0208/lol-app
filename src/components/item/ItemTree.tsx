import { Item } from "@/types/Item";
import Image from "next/image";

interface ItemTreeProps {
  item: Item;
  items: Item[];
  version: string;
  onItemClick: (item: Item) => void;
}

const ItemTree = ({ item, items, version, onItemClick }: ItemTreeProps) => {
  if (!item.from || item.from.length === 0) {
    return null;
  }

  return (
    <div className="pl-4 border-l-2 border-gray-600">
      <h3 className="text-lg font-bold mb-2">재료 아이템:</h3>
      <div className="flex flex-col">
        {item.from.map((itemId) => {
          const lowerItem = items.find(
            (i) => i.image.full === `${itemId}.png`
          );
          if (!lowerItem) return null;

          return (
            <div key={lowerItem.id} className="mb-4">
              <div className="flex items-center cursor-pointer mb-2" onClick={() => onItemClick(lowerItem)}>
                <Image
                  className="rounded p-1"
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${lowerItem.image.full}`}
                  alt={lowerItem.name}
                  width={40}
                  height={40}
                />
                <span className="ml-2 text-white">{lowerItem.name}</span>
              </div>
              {/* 하위 재료가 있으면 재귀적으로 렌더링 */}
              <ItemTree item={lowerItem} items={items} version={version} onItemClick={onItemClick} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemTree;
