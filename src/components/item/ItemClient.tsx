"use client";

import { useState } from "react";
import { Item } from "@/types/Item";
import SelectedItemDetail from "./SelectedItemDetail";
import ItemList from "./ItemList";

interface ItemClientProps {
  items: Item[];
  version: string;
}

const ItemClient = ({ items, version }: ItemClientProps) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="flex flex-row justify-center w-1/2 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-900">
        <ItemList
          items={items}
          version={version}
          onItemClick={handleItemClick}
        />
      </div>

      {selectedItem && (
        <div className="w-1/2 h-full p-4 rounded bg-gray-900 text-white">
          <SelectedItemDetail
            selectedItem={selectedItem}
            items={items}
            version={version}
            onItemClick={handleItemClick}
          />
        </div>
      )}
    </>
  );
};

export default ItemClient;
