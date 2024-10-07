"use server";

import { Champion, ChampionList } from "@/types/Champion";
import { Day, getLatestVersion } from "./Api";

export const handleFetchError = (res: Response) => {
  if (!res.ok) {
    console.error("응답 에러", res.statusText);
    throw new Error("응답 에러");
  }
};

export async function getChampionListAction(): Promise<Champion[]> {
  const version = await getLatestVersion();
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
    {
      next: { revalidate: Day },
    }
  );

  handleFetchError(res);

  const { data }: { data: ChampionList } = await res.json();
  return Object.values(data);
}

export const getChampionDetailAction = async (
  id: string
): Promise<Champion> => {
  const version = await getLatestVersion();
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
    {
      next: { revalidate: Day },
    }
  );

  handleFetchError(res);

  if (!res.ok) throw new Error();

  const data = await res.json();
  return data.data[id];
};
