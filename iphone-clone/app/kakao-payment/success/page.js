"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Search = () => {
  const params = useSearchParams();
  return (
    <section className="flex flex-col justify-center items-center h-[100vh] gap-4">
      <div className="text-[40px]">결제가 성공적으로 완료되었습니다.</div>
      <div className="text-[21px] opacity-70">감사합니다.</div>
      <div className="text-[21px] opacity-70">{params.get("pg_token")}</div>
    </section>
  );
};
const Page = () => {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
};

export default Page;
