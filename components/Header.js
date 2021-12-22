import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <header className="py-6 shadow">
      <div className="max-w-screen-xl mx-auto px-8 flex items-center justify-between">
        <span className="text-2xl font-bold text-slate-900">iPhone 13 Pro</span>
        <nav className={`${visible ? "block" : "hidden"} sm:block`}>
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
        <div onClick={() => setVisible(!visible)} className="cursor-pointer flex items-center justify-center">
          <FontAwesomeIcon icon={faBars} className="w-8 h-8 text-3xl text-slate-700" />
        </div>
      </div>
    </header>
  );
}
