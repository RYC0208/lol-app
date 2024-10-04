import { Rotation } from "@/types/ChampionRotation";
import { Champion } from "../types/Champion";
import { getChampionList } from "./Api";

export const getRotation = async (): Promise<Champion[]> => {
  try {
    const champions = await getChampionList();

    const response = await fetch("/api/rotation");

    if (!response.ok) {
      throw new Error(`응답 에러: ${response.status}`);
    }

    const result: Rotation = await response.json();
    const freeChampionIds = result.freeChampionIds;

    const rotation: Champion[] = champions.filter((champion) =>
      freeChampionIds.includes(Number(champion.key))
    );

    return rotation;
  } catch (error) {
    console.error("데이터 fetching에러 :", error);
    return [];
  }
};
