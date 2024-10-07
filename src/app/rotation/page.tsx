"use client";

import { useEffect, useState } from "react";
import { Champion } from "@/types/Champion";
import { getRotation } from "@/utils/Api";
import ChampionList from "@/components/champion/ChampionList";
import Loading from "./loading";

const RotationPage = () => {
  const [rotationChamps, setRotationCham] = useState<Champion[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const rotations = await getRotation();
      setRotationCham(rotations);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-gradient-to-br from-[#0b1538] to-[#1b2234]">
      <ChampionList champions={rotationChamps} />
    </div>
  );
};

export default RotationPage;
