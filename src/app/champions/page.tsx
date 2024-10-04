import ChampionList from "@/components/champion/ChampionList";
import { getChampionListAction } from "@/server/ChampActions";
import { Champion } from "@/types/Champion";
import React from "react";

const Champions = async () => {
  const champions: Champion[] = await getChampionListAction();

  return (
    <>
      <ChampionList champions={champions} />
    </>
  );
};

export default Champions;
