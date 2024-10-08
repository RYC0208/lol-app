import { Item } from "@/types/Item";
import Image from "next/image";
import ItemTree from "./ItemTree";

interface SelectedItemDetailProps {
  selectedItem: Item;
  items: Item[];
  version: string;
  onItemClick: (item: Item) => void;
}

const SelectedItemDetail = ({
  selectedItem,
  items,
  version,
  onItemClick,
}: SelectedItemDetailProps) => {
  return (
    <div className="text-white p-[50px] h-[800px]">
      {selectedItem.into && selectedItem.into.length > 0 && (
        <div>
          <div className="flex flex-row">
            {selectedItem.into.map((itemId) => {
              const upperItem = items.find(
                (item) => item.image.full === `${itemId}.png`
              );
              return (
                <div key={crypto.randomUUID()} className="mb-4">
                  {upperItem && (
                    <div
                      className="flex cursor-pointer"
                      onClick={() => onItemClick(upperItem)}
                    >
                      <Image
                        className="rounded p-1"
                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${upperItem.image.full}`}
                        alt={upperItem.name}
                        width={50}
                        height={50}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="flex flex-row mb-4">
        <Image
          className="rounded p-1"
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${selectedItem.image.full}`}
          alt={selectedItem.name}
          width={50}
          height={50}
        />
        <div className="flex flex-col ml-4">
          <h2 className="text-2xl font-bold">{selectedItem.name}</h2>
          <p className="text-yellow-600">{selectedItem.gold.total} 골드</p>
        </div>
      </div>

      <div
        className="mt-2 mb-4"
        dangerouslySetInnerHTML={{ __html: selectedItem.description }}
      />
      <h3 className="text-lg font-bold mb-2 text-gray-300">하위 아이템</h3>
      <ItemTree
        item={selectedItem}
        items={items}
        version={version}
        onItemClick={onItemClick}
      />
    </div>
  );
};

export default SelectedItemDetail;
