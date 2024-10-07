import ChampionList from "@/components/champion/ChampionList";
import { getChampionListAction } from "@/server/ChampActions";
import { Champion } from "@/types/Champion";
import React from "react";

export const metadata = {
  title: "롤 챔피언 목록",
  description: "챔피언 목록 페이지",
};

const Champions = async () => {
  const champions: Champion[] = await getChampionListAction();

  return (
    <div className="bg-gradient-to-br from-[#0b1538] to-[#1b2234]">
      <ChampionList champions={champions} />
    </div>
  );
};

export default Champions;
