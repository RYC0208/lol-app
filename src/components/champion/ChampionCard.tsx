import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ChampionCardProps {
  champion: Champion;
}

const ChampionCard: React.FC<ChampionCardProps> = ({ champion }) => {
  return (
    <Link key={champion.id} href={`/champions/${champion.id}`} passHref>
      <div className="flex flex-col items-center cursor-pointer overflow-hidden bg-[#051533] hover:bg-[#343944]">
        <div className="relative w-full h-[400px] overflow-hidden">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
            alt={champion.name}
            width={300}
            height={400}
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="text-center mt-2">
          <h3 className="text-lg font-bold text-white">{champion.name}</h3>
          <p className="text-gray-300">{champion.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default ChampionCard;
