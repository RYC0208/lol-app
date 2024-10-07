"use server";

import { Item, ItemList } from "@/types/Item";
import { Day, getLatestVersion } from "./Api";
import { handleFetchError } from "./ChampActions";

export async function getItemListAction(): Promise<Item[]> {
  const version = await getLatestVersion();
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
    {
      next: { revalidate: Day },
    }
  );

  handleFetchError(res);

  const { data }: { data: ItemList } = await res.json();
  return Object.values(data);
}
