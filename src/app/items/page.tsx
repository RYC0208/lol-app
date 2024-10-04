// app/items/page.tsx (Server Component)
import React from "react";
import { Item } from "@/types/Item";
import ItemClient from "@/components/item/ItemClient";
import { getItemListAction, getLatestVersion } from "@/server/ItemActions";

const Page = async () => {
  const version: string = await getLatestVersion();
  const itemList: Item[] | undefined = await getItemListAction();

  const filteredItems =
    itemList
      ?.filter((item) => item.maps["11"] && item.gold.purchasable)
      .sort((a, b) => a.gold.total - b.gold.total) || [];

  return (
    <div className="flex flex-row items-center bg-[#051533]">
      <ItemClient items={filteredItems} version={version} />
    </div>
  );
};

export default Page;
