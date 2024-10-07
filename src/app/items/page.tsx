// app/items/page.tsx (Server Component)
import React from "react";
import { Item } from "@/types/Item";
import ItemClient from "@/components/item/ItemClient";
import { getItemListAction } from "@/server/ItemActions";
import { getLatestVersion } from "@/utils/Api";

export const metadata = {
  title: "롤 아이템 목록",
  description: "아이템 목록페이지",
};

const Page = async () => {
  const version: string = await getLatestVersion();
  const itemList: Item[] = await getItemListAction();

  const filteredItems =
    itemList
      ?.filter((item) => item.maps["11"] && item.gold.purchasable)
      .sort((a, b) => a.gold.total - b.gold.total) || [];
  if (!filteredItems[0]) {
    return <>로딩중</>;
  }
  return (
    <div className="flex flex-row items-center bg-gradient-to-br from-[#0b1538] to-[#1b2234]">
      <ItemClient items={filteredItems} version={version} />
    </div>
  );
};

export default Page;
