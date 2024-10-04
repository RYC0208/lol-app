"use client";

import React, { useState } from "react";
import { Champion } from "@/types/Champion";
import Image from "next/image";

interface ChampionSkillProps {
  champion: Champion;
  version: string;
}

const ChampionSkill = ({ champion, version }: ChampionSkillProps) => {
  const [selectedSpell, setSelectedSpell] = useState(champion.spells[0]);

  return (
    <div className="bg-[#000c24] text-white p-10 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">스킬</h1>
      <div className="flex flex-row p-10 gap-10">
        {champion.spells.map((spell) => {
          const isSelected = selectedSpell.id === spell.id;
          return (
            <div
              key={spell.id}
              className={`flex flex-col w-[200px] justify-center items-center transition-transform duration-300 hover:scale-110 cursor-pointer ${
                isSelected ? "" : "opacity-50"
              }`}
              onClick={() => setSelectedSpell(spell)}
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.id}.png`}
                alt={`${spell.name}`}
                width={50}
                height={50}
              />
              <div className="mt-2">
                <h1>{spell.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5 text-center w-[1000px] h-[40px]">
        <p dangerouslySetInnerHTML={{ __html: selectedSpell.description }} />
      </div>
    </div>
  );
};

export default ChampionSkill;
