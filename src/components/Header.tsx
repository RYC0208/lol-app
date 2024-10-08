import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {" "}
      {/* 헤더를 고정 */}
      <nav className="w-full h-[36px] flex items-center justify-around text-white bg-[#0b1538]">
        <Link href={"/"}>홈</Link>
        <Link href={"/champions"}>챔피언 목록</Link>
        <Link href={"/items"}>아이템 목록</Link>
        <Link href={"/rotation"}>챔피언 로테이션</Link>
      </nav>
    </header>
  );
};

export default Header;
