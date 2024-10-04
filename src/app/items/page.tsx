"use client";

import { useEffect, useState } from "react";
import { Item } from "@/types/Item";
import { getItemList, getLatestVersion } from "@/utils/Api";
import SelectedItemDetail from "@/components/item/SelectedItemDetail";
import ItemList from "@/components/item/ItemList";

const Page = () => {
  const [version, setVersion] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const fetchItems = async () => {
    const version = await getLatestVersion();
    setVersion(version);

    const itemList = await getItemList();
    const filteredItems = itemList
      ?.filter((item) => item.maps["11"] && item.gold.purchasable)
      .sort((a, b) => a.gold.total - b.gold.total);

    setItems(filteredItems || []);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex flex-row items-center bg-[#051533]">
      <div className="flex flex-row justify-center w-1/2 h-screen overflow-y-auto">
        <ItemList
          items={items}
          version={version}
          onItemClick={handleItemClick}
        />
      </div>

      {selectedItem && (
        <SelectedItemDetail
          selectedItem={selectedItem}
          items={items}
          version={version}
          onItemClick={handleItemClick}
        />
      )}
    </div>
  );
};

export default Page;
