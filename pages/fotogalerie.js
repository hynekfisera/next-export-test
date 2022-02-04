import React from "react";
import Head from "next/head";
import Header from "../components/Header";

export default function fotogalerie() {
  const images = [];
  for (let i = 1; i <= 12; i++) {
    images[i - 1] = `img${i}.jpg`;
  }

  return (
    <>
      <Head>
        <title>Fotogalerie | iPhone 13 Pro</title>
      </Head>
      <Header />
      <section className="max-w-screen-xl mx-auto px-8 text-center py-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-800 mb-8 leading-tight">Fotogalerie</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <a href={"assets/" + img} key={i}>
              <img src={"./assets/" + img} alt={`Foto ${i}`} className="w-full h-auto" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
