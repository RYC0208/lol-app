"use server";

import { Item, ItemList } from "@/types/Item";

const Day = 24 * 60 * 60 * 1000; // 1일
const fiveDays = 5 * Day; // 5일

export const getLatestVersion = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
    {
      next: { revalidate: fiveDays },
    }
  );
  const data = await res.json();
  return data[0];
};

export async function getItemListAction(): Promise<Item[] | undefined> {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
      {
        next: { revalidate: fiveDays },
      }
    );
    if (!res.ok) throw new Error();

    const { data }: { data: ItemList } = await res.json();
    return Object.values(data);
  } catch (error) {
    console.error(error);
  }
}
