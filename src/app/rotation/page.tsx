"use client";

import { useEffect, useState } from "react";
import { Champion } from "@/types/Champion";
import { getRotation } from "@/utils/RiotApi";
import ChampionList from "@/components/champion/ChampionList";

const RotationPage = () => {
  const [rotationChamps, setRotationCham] = useState<Champion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      const rotations = await getRotation();
      setRotationCham(rotations);
      setIsLoading(true);
    };

    fetchData();
  }, []);

  if (!isLoading) return <div>로딩중__________</div>;

  return (
    <div>
      <ChampionList champions={rotationChamps} />
    </div>
  );
};

export default RotationPage;
