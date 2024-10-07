import Link from "next/link";
export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0b1538] to-[#1b2234]">
      <h1 className="text-3xl font-bold text-white mb-8">롤 정보 페이지</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link
          href={"/champions"}
          className="bg-[#1f2b3a] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center text-white"
        >
          <h2 className="text-lg font-semibold mb-2">챔피언 목록</h2>
        </Link>
        <Link
          href={"/items"}
          className="bg-[#1f2b3a] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center text-white"
        >
          <h2 className="text-lg font-semibold mb-2">아이템 목록</h2>
        </Link>
        <Link
          href={"/rotation"}
          className="bg-[#1f2b3a] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center text-white"
        >
          <h2 className="text-lg font-semibold mb-2">로테이션 챔피언 목록</h2>
        </Link>
      </div>
    </div>
  );
}
