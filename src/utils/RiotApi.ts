import { Rotation } from "@/types/ChampionRotation";
import { Champion } from "../types/Champion";
import { getChampionList } from "./Api";

export const getRotation = async () => {
  const champions = await getChampionList(); // 모든 챔피언 리스트 가져오기

  const response = await fetch("/api/rotation"); // 로테이션 데이터 가져오기
  const result: Rotation = await response.json();
  const freeChampionIds = result.freeChampionIds; // 로테이션 챔피언 ID 추출

  const rotation: Champion[] = champions.filter(
    (champion) => freeChampionIds.includes(Number(champion.key)) // 챔피언 ID와 일치하는 것 필터링
  );

  return rotation; // 필터링된 로테이션 챔피언 배열 반환
};
