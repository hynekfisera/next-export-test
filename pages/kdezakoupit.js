import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";

export default function kdezakoupit() {
  return (
    <>
      <Head>
        <title>Fotogalerie | iPhone 13 Pro</title>
      </Head>
      <Header />
      <section className="max-w-screen-xl mx-auto px-8 py-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-800 mb-4 leading-tight text-center">Kde zakoupit?</h1>
        <div className="flex items-center justify-center sm:gap-8 flex-wrap">
          <Link href="https://www.alza.cz/iphone-13-pro/18892048.htm">
            <a className="inline-block w-48">
              <img src="./assets/alza.png" alt="Alza logo" />
            </a>
          </Link>
          <Link href="https://www.czc.cz/iphone-13-pro/produkty">
            <a className="inline-block w-48">
              <img src="./assets/czc.png" alt="Czc logo" />
            </a>
          </Link>
          <Link href="https://www.datart.cz/apple-novinky-03.html">
            <a className="inline-block w-48">
              <img src="./assets/datart.png" alt="Datart logo" />
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}
