// app/champion/[id]/page.tsx
import React from "react";
import ChampionSkill from "@/components/champion/ChampionSkill";
import ChampionSkin from "@/components/champion/ChampionSkin";
import { getChampionDetailAction } from "@/server/ChampActions";
import { getLatestVersion } from "@/utils/Api";

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `${params.id} 상세페이지`,
    description: `${params.id}의 정보를 제공하는 상세페이지`,
  };
}

const ChampionDetailPage = async ({ params }: Props) => {
  const { id } = params;
  const champion = await getChampionDetailAction(id);
  const version = await getLatestVersion();
  if (!champion) {
    return (
      <div>
        <h1>챔피언을 찾을 수 없습니다.</h1>
      </div>
    );
  }

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
