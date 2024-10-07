import { Rotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.RIOT_API_KEY;
  const URL = "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";

  if (!API_KEY) {
    return NextResponse.json(
      { message: "API 키가 설정되지 않았습니다." },
      { status: 500 }
    );
  }

  const response = await fetch(URL, {
    headers: {
      "X-Riot-Token": API_KEY,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "로테이션 데이터 가져오기 실패", status: response.status },
      { status: response.status }
    );
  }

  const data: Rotation = await response.json();
  return NextResponse.json(data);
}
