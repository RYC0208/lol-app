"use server";

import { Champion, ChampionList } from "@/types/Champion";
import { Item, ItemList } from "@/types/Item";

const Day = 24 * 60 * 60 * 1000; // 1일
const fiveDays = 5 * Day; // 5일

export const getLatestVersion = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
    {
      next: {
        revalidate: fiveDays,
      },
    }
  );
  const data = await res.json();
  return data[0];
};

export async function getChampionList(): Promise<Champion[]> {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: fiveDays,
        },
      }
    );

    const { data }: { data: ChampionList } = await res.json();

    return Object.values(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getChampionDetail = async (id: string): Promise<Champion> => {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,

      {
        cache: "no-store",
        next: { revalidate: fiveDays },
      }
    );
    if (!res.ok) throw new Error();

    const data = await res.json();
    console.log(data);
    return data.data[id];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export async function getItemList(): Promise<Item[] | undefined> {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
      {
        next: {
          revalidate: fiveDays,
        },
      }
    );
    if (!res.ok) throw new Error();

    const { data }: { data: ItemList } = await res.json();

    return Object.values(data);
  } catch (error) {
    console.error(error);
  }
}
