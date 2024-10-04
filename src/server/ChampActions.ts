"use server";

import { Champion, ChampionList } from "@/types/Champion";

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

export async function getChampionListAction(): Promise<Champion[]> {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      {
        next: { revalidate: fiveDays },
      }
    );

    const { data }: { data: ChampionList } = await res.json();
    return Object.values(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getChampionDetailAction = async (id: string): Promise<Champion> => {
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
    return data.data[id];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
