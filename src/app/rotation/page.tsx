"use client";

import { useEffect, useState } from "react";
import { Champion } from "@/types/Champion";
import { getRotation } from "@/utils/Api";
import ChampionList from "@/components/champion/ChampionList";

const RotationPage = () => {
  const [rotationChamps, setRotationCham] = useState<Champion[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const rotations = await getRotation();
      setRotationCham(rotations);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0b1538] to-[#1b2234]">
      <ChampionList champions={rotationChamps} />
    </div>
  );
};

export default RotationPage;
