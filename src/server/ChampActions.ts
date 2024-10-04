"use server";

import { Champion, ChampionList } from "@/types/Champion";
import { Day, getLatestVersion } from "./Api";

// 1일

export async function getChampionListAction(): Promise<Champion[]> {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      {
        next: { revalidate: Day },
      }
    );

    const { data }: { data: ChampionList } = await res.json();
    return Object.values(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getChampionDetailAction = async (
  id: string
): Promise<Champion> => {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
      {
        next: { revalidate: Day },
      }
    );

    if (!res.ok) throw new Error();

    const data = await res.json();
    return data.data[id];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
