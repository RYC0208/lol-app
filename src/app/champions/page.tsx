import ChampionList from "@/components/champion/ChampionList";
import { Champion } from "@/types/Champion";
import { getChampionList } from "@/utils/Api";
import React from "react";

const Champions = async () => {
  const champions: Champion[] = await getChampionList();

  return (
    <>
      <ChampionList champions={champions} />
    </>
  );
};

export default Champions;
