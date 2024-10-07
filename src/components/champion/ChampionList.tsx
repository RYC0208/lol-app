import React from "react";
import { Champion } from "@/types/Champion";
import ChampionCard from "./ChampionCard";

interface ChampionListProps {
  champions: Champion[];
}

const ChampionList: React.FC<ChampionListProps> = ({ champions }) => {
  const sortedChampions = champions.sort((a, b) => {
    return a.name.localeCompare(b.name, "ko");
  });

  return (
    <div className="grid grid-cols-6 gap-3 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-900">
      {sortedChampions.map((champion) => (
        <ChampionCard key={champion.id} champion={champion} />
      ))}
    </div>
  );
};

export default ChampionList;
