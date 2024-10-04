import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href={"/champions"}>챔피언 목록가기</Link>
      <Link href={"/items"}>아이템 목록가기</Link>
      <Link href={"/rotation"}>챔피언 로테이션가기</Link>
    </div>
  );
}
