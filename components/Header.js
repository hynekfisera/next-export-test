import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <header className={`py-6 ${!visible && "shadow"}`}>
      <div className="max-w-screen-xl mx-auto px-8 flex items-center justify-between">
        <span className="text-2xl font-bold text-slate-900">iPhone 13 Pro</span>
        <nav className={`${visible ? "flex" : "hidden"} flex-col sm:flex-row items-center sm:justify-end sm:flex absolute sm:static z-10 bg-white top-24 left-0 right-0 pb-8 sm:pb-0 border-b border-slate-300 sm:border-none`}>
          {[
            { text: "Domů", href: "index" },
            { text: "O produktu", href: "oproduktu" },
            { text: "Fotogalerie", href: "fotogalerie" },
            { text: "Kde zakoupit?", href: "kdezakoupit" },
          ].map((link, i) => {
            return (
              <a href={link.href + ".html"} key={i} className="text-lg font-medium text-slate-600 transition duration-200 hover:text-slate-900 mb-2 sm:mb-0 sm:ml-4">
                {link.text}
              </a>
            );
          })}
        </nav>
        <div onClick={() => setVisible(!visible)} className="cursor-pointer flex items-center justify-center sm:hidden">
          <FontAwesomeIcon icon={faBars} className="w-8 h-8 text-3xl text-slate-700" />
        </div>
      </div>
    </header>
  );
}
