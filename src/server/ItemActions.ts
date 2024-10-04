"use server";

import { Item, ItemList } from "@/types/Item";
import { Day, getLatestVersion } from "./Api";

export async function getItemListAction(): Promise<Item[]> {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
      {
        next: { revalidate: Day },
      }
    );
    if (!res.ok) throw new Error();

    const { data }: { data: ItemList } = await res.json();
    return Object.values(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
