// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {GoHome, GoBook, GoCodeOfConduct, GoMail, GoGift} from "react-icons/go";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto flex justify-center items-center gap-40 py-10">
        {/* Logo */}
        <Image src="/bakawan-logo.png" alt="Logo" width={100} height={100} />

        {/* Navigation*/}
        <nav className="flex gap-15">
          <Link href="/" className="btn rounded-[20px] flex items-center gap-2">
            <GoHome className="w-4 h-4" />
            About
          </Link>
          <Link href="/about" className="btn rounded-[20px] flex items-center gap-2">
            <GoBook className="w-4 h-4" />
            Stories
          </Link>
          <Link href="/services" className="btn rounded-[20px] flex items-center gap-2">
            <GoCodeOfConduct className="w-4 h-4" />
            Campaigns
          </Link>
          <Link href="/contact" className="btn rounded-[20px] flex items-center gap-2">
            <GoMail className="w-4 h-4" />
            Contact
          </Link>
          <Link href="/donate" className="btn rounded-[20px] flex items-center gap-2 bg-green-500 text-white hover:bg-green-800">
            <GoGift className="w-4 h-4" />
            Donate
        </Link>
        </nav>
      </div>
    </header>
  );
}
