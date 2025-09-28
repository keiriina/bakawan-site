// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const baseLink = "flex items-center gap-2 font-poppins text-gray-700 hover:text-primary transition-colors border-b-2 border-transparent pb-1";
  const activeLink = "text-primary border-primary font-semibold";
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto flex justify-center items-center py-10">
        {/* Navigation*/}
        <nav className="flex gap-20">
          <Link href="/" className={`${baseLink} ${isActive("/") ? activeLink : ""}`}
            aria-current={isActive("/") ? "page" : undefined}
          >
            {/* <GoHome className="w-4 h-4" /> */}
            About
          </Link>
          <Link href="/stories" className={`${baseLink} ${isActive("/stories") ? activeLink : ""}`}
            aria-current={isActive("/stories") ? "page" : undefined}
          >
            {/* <GoBook className="w-4 h-4" /> */}
            Stories
          </Link>
          <Link href="/campaigns" className={`${baseLink} ${isActive("/campaigns") ? activeLink : ""}`}
            aria-current={isActive("/campaigns") ? "page" : undefined}
          >
            {/* <GoCodeOfConduct className="w-4 h-4" /> */}
            Campaigns
          </Link>
          <Link href="/contact" className={`${baseLink} ${isActive("/contact") ? activeLink : ""}`}
            aria-current={isActive("/contact") ? "page" : undefined}
          >
            {/* <GoMail className="w-4 h-4" /> */}
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
