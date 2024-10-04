import { getLatestVersion, getRotation } from "@/server/Api";
import { getChampionListAction } from "@/server/ChampActions";
import { getItemListAction } from "@/server/ItemActions";
import { Champion } from "@/types/Champion";
import { Item } from "@/types/Item";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const rotations: Champion[] = await getRotation();
  const champions: Champion[] = await getChampionListAction();
  const items: Item[] = await getItemListAction();
  const version: string = await getLatestVersion();
  console.log(rotations);
  return (
    <div className="flex flex-col">
      <Link href={"/champions"}>
        챔피언 목록가기
        <div className="flex flex-row">
          {champions
            .filter((champion, index) => index <= 15)
            .sort((a, b) => a.name.localeCompare(b.name, "ko"))
            .map((champion) => (
              <div key={crypto.randomUUID()}>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                  alt={champion.name}
                  width={100}
                  height={100}
                />
              </div>
            ))}
        </div>
      </Link>

      <Link href={"/items"}>
        아이템 목록가기
        <div className="flex flex-row flex-wrap">
          {items
            .filter((item, index) => index <= 105)
            .sort((a, b) => a.name.localeCompare(b.name, "ko"))
            .map((item) => (
              <div key={crypto.randomUUID()}>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
                  alt={item.name}
                  width={30}
                  height={30}
                />
              </div>
            ))}
        </div>
      </Link>
      <Link href={"/rotation"}>
        챔피언 로테이션가기
        <div className="flex flex-row">
          {rotations
            .filter((champion, index) => index <= 15)
            .sort((a, b) => a.name.localeCompare(b.name, "ko"))
            .map((champion) => (
              <div key={crypto.randomUUID()}>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                  alt={champion.name}
                  width={100}
                  height={100}
                />
              </div>
            ))}
        </div>
      </Link>
    </div>
  );
}
