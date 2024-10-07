"use client";

import React, { useState } from "react";
import { Champion, Skin } from "@/types/Champion";
import Image from "next/image";

interface ChampionSkinProps {
  champion: Champion;
}

const ChampionSkin = ({ champion }: ChampionSkinProps) => {
  const [selectedSkin, setSelectedSkin] = useState(champion.skins[0]);

  const handleSkinClick = (skin: Skin) => {
    setSelectedSkin(skin);
  };

  return (
    <div className="bg-[#000c24] text-white p-10 flex flex-col justify-center">
      <div className="m-auto p-10">
        <h1 className="text-5xl font-bold">스킨</h1>
      </div>
      <div className="flex flex-col mb-4 m-auto p-10 w-full h-full">
        <div className="w-full h-[750px] relative">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${selectedSkin.num}.jpg`}
            alt={selectedSkin.name}
            fill
            className="rounded-lg"
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>
        {selectedSkin.name === "default" ? (
          <p>{champion.name}</p>
        ) : (
          <p>{selectedSkin.name}</p>
        )}
      </div>
      <div className="flex justify-center space-x-4">
        {champion.skins.map((skin) => {
          const isSelected = selectedSkin.id === skin.id;
          return (
            <div
              key={skin.id}
              className={`relative w-[100px] h-[50px] ${
                isSelected ? "" : "opacity-30"
              }`}
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`}
                alt={skin.name}
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
                className="rounded-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() => handleSkinClick(skin)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionSkin;
