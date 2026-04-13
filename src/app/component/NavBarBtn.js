"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faClock, faChartLine } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <ul className="flex gap-4">
      
      {/* Home */}
      <li
        className={`${
          pathName === "/"
            ? "bg-[#244D3F] text-white"
            : "text-[#64748B]"
        } rounded-[4px] p-3 font-semibold w-[100px]`}
      >
        <Link href="/" className="flex items-center gap-1">
          <FontAwesomeIcon icon={faHome} />
          Home
        </Link>
      </li>

      {/* Timeline */}
      <li
        className={`${
          pathName === "/timeline"
            ? "bg-[#244D3F] text-white"
            : "text-[#64748B]"
        } rounded-[4px] p-3 font-semibold w-[100px]`}
      >
        <Link href="/timeline" className="flex items-center justify-center gap-1">
          <FontAwesomeIcon icon={faClock} />
          Timeline
        </Link>
      </li>

      {/* Stats */}
      <li
        className={`${
          pathName === "/stats"
            ? "bg-[#244D3F] text-white"
            : "text-[#64748B]"
        } rounded-[4px] p-3 font-semibold w-[100px]`}
      >
        <Link href="/stats"  className="flex justify-center items-center gap-1">
          <FontAwesomeIcon icon={faChartLine} />
          Stats
        </Link>
      </li>

    </ul>
  );
}