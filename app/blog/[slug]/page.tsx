'use client';
import { useEffect } from "react";
import {  usePathname, useSearchParams } from "next/navigation";
// import Link from "next/link";
import { useRouter } from "next/navigation";
// function generateStaticParams() {}

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = `${pathname}?${searchParams}`;

  useEffect(()=>{
    const url2 = `${pathname}?${searchParams}`;
    console.log(url2);
  }, [pathname, searchParams]);

  return (
    <>
      <button onClick={() =>router.back()}> back to the upper url</button>
      <h1>Hello, Blog Post Page! { url }</h1>
    </>
  )
}
