/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | iPhone 13 Pro</title>
      </Head>
      <main>
        <section id="intro" className="max-w-screen-sm mx-auto px-8 text-center py-16">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-800 mb-6 leading-tight">Velká věda za každým snímkem.</h1>
          <p className="text-lg text-slate-600">Dramaticky zdokonalená soustava fotoaparátů. Displej, který reaguje tak bezprostředně, že tě pokaždé překvapí. Nejrychlejší smartphonový čip na světě. Výjimečná odolnost. A obrovský skok ve výdrži baterie.</p>
        </section>
        <section id="oproduktu" className="max-w-screen-xl mx-auto px-8 py-8 sm:grid grid-cols-2 gap-16 items-center">
          <div className="mb-8 sm:mb-0">
            <img src="./assets/domu_oproduktu.png" alt="iPhone 13 Pro" className="my-auto" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Informace o produktu</h2>
            <p className="block text-slate-600 mb-4">Až o 25 % větší jas venku, aby tvůj obsah vypadal na přímém slunci ještě živěji. Jedinečná OLED technologie posouvá úžasné rozlišení a barvy displeje na samou hranu. Ještě větší plocha displeje díky menší TrueDepth fotosoustavě.</p>
            <Link href="/oproduktu">
              <a className="btn btn-primary">O produktu</a>
            </Link>
          </div>
        </section>
        <section id="fotogalerie" className="max-w-screen-xl mx-auto px-8 py-8 flex flex-col-reverse sm:grid sm:flex-col sm:grid-cols-2 sm:gap-16 sm:items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Úžasný design</h2>
            <p className="block text-slate-600 mb-4">
              6,1&quot; Super Retina XDR displej přes celou plochu. Jemné rozlišení 2 532 × 1 170 bodů s jemností 460 pixelů na palec. Ceramic Shield, pevnější než jakékoli sklo na smartphonu. Soustava magnetů na zadní straně telefonu iPhone 13 nabízí mimořádně zajímavé funkce.
            </p>
            <Link href="/fotogalerie">
              <a className="btn btn-primary">Fotogalerie</a>
            </Link>
          </div>
          <div className="mb-8 sm:mb-0">
            <img src="./assets/domu_fotogalerie.png" alt="iPhone 13 Pro" className="mx-auto max-h-96" />
          </div>
        </section>
        <section id="kdezakoupit" className="max-w-screen-xl mx-auto px-8 pt-8 pb-32 flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6 text-center leading-tight">Skvělý design svědčí planetě.</h2>
          <Link href="/oproduktu">
            <a className="btn btn-primary">Kde zakoupit?</a>
          </Link>
        </section>
      </main>
    </>
  );
}
