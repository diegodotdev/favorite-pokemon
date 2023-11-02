"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full h-[12vh] px-5 md:px-10 flex justify-end items-center gap-10 relative">
      <Link href="/" className="hidden md:inline">
        Home
      </Link>
      <Link href="/all-time-results" className="hidden md:inline">
        All Time Results
      </Link>
      <p className="md:hidden" onClick={() => setActive(!active)}>
        Menu
      </p>
      <div
        className={cn(
          "duration-[.8s] fixed top-[12vh] bg-black w-full h-[88vh] right-0 flex justify-evenly items-center flex-col md:hidden",
          active ? "translate-x-0" : "translate-x-[100%]"
        )}
      >
        <Link
          href="/"
          className="text-2xl font-[600]"
          onClick={() => setActive(!active)}
        >
          Home
        </Link>
        <Link
          href="/all-time-results"
          className="text-2xl font-[600]"
          onClick={() => setActive(!active)}
        >
          All Time Results
        </Link>
      </div>
    </div>
  );
}
