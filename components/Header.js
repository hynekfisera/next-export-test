import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6 shadow">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <span className="text-2xl font-bold text-slate-900">iPhone 13 Pro</span>
        <nav>
          {[
            { text: "Domů", href: "/" },
            { text: "O produktu", href: "/oproduktu" },
            { text: "Fotogalerie", href: "/fotogalerie" },
            { text: "Kde zakoupit", href: "/kdezakoupit" },
          ].map((link, i) => {
            return (
              <Link href={link.href} key={i}>
                <a className="text-lg font-medium text-slate-600 transition duration-200 hover:text-slate-900 ml-4">{link.text}</a>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
