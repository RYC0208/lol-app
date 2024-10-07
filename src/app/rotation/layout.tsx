import { ReactNode, Suspense } from "react";

export const metadata = {
  title: "롤 로테이션 챔피언 목록",
  description: "로테이션 챔피언 목록 페이지",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RotationLayout({ children }: LayoutProps) {
  return (
      <>{children}</>
  );
}
