"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Pictures", href: "/pictures" },
  { name: "News", href: "/news" },
  { name: "Chatbot", href: "/chatbot" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between text-white">

        {/* logo */}
        <Link href="/" className="font-bold text-lg tracking-wide">
          Astrodyssey
        </Link>

        {/* desktop */}
        <div className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 border-b border-white/5 ${
                pathname === link.href
                  ? "text-purple-400"
                  : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
