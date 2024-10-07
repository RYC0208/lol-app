import { Rotation } from "@/types/ChampionRotation";
import { Champion } from "../types/Champion";
import { getChampionListAction } from "../server/ChampActions";
export const getRotation = async (): Promise<Champion[]> => {
  const champions = await getChampionListAction();

  const response = await fetch(`/api/rotation`);

  if (!response.ok) {
    throw new Error(`응답 에러: ${response.status}`);
  }

  const result: Rotation = await response.json();
  const freeChampionIds = result.freeChampionIds;

  const rotation: Champion[] = champions.filter((champion) =>
    freeChampionIds.includes(Number(champion.key))
  );

  return rotation;
};

export const getLatestVersion = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
    {
      next: { revalidate: Day },
    }
  );
  const data = await res.json();
  return data[0];
};

export const Day = 24 * 60 * 60 * 1000;
