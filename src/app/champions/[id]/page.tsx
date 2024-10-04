import React from "react";
import { Champion, ChampionList } from "@/types/Champion";
import { getChampionDetail, getLatestVersion } from "@/utils/Api";
import ChampionSkill from "@/components/champion/ChampionSkill";
import ChampionSkin from "@/components/champion/ChampionSkin";
const ChampionDetailPage = async ({ params }: ChampionList) => {
  const version = await getLatestVersion();
  const { id } = params;

  const champion: Champion = await getChampionDetail(id);

  return (
    <div>
      <div
        className="relative w-full h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg)`,
        }}
      >
        <div className="flex flex-col justify-center  absolute inset-0 bg-black bg-opacity-30">
          <div className="flex flex-col text-white w-3/6 p-6">
            <p className="text-3xl font-bold text-[#d1c178]">
              {champion.title}
            </p>
            <h1 className="text-8xl font-bold">{champion.name}</h1>
            <p className="mt-2 text-lg">{champion.lore}</p>
          </div>
        </div>
      </div>
      <ChampionSkill champion={champion} version={version} />
      <ChampionSkin champion={champion} />
    </div>
  );
};

export default ChampionDetailPage;
