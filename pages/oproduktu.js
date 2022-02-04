import React from "react";
import Head from "next/head";
import Header from "../components/Header";

export default function oproduktu() {
  return (
    <>
      <Head>
        <title>O produktu | iPhone 13 Pro</title>
      </Head>
      <Header />
      <main>
        <section className="max-w-screen-sm mx-auto px-8 text-center pt-16">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-800 mb-8 leading-tight">O produktu</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XKfgdkcIUxw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>
        <section className="max-w-screen-xl mx-auto px-8 py-16">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Displej</h2>
          <p className="text-lg mb-6">
            Nový iPhone 13 je vybavený 6,1&quot; Super Retina XDR displejem, který nabízí jemné rozlišení 2 532 x 1 170 bodů s jemností 460 pixelů na palec. Mezi jeho klíčové benefity patří podpora HDR 10 a Dolby Vision, maximální jas 800 nitů (v HDR až 1 200) nebo ohromný kontrastní poměr 2 000
            000:1. Celou čelní stranu mobilního telefonu Apple iPhone 13 pak kryje speciálně vyvinuté sklo zvané Ceramic Shield.
          </p>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Fotoaparát</h2>
          <p className="text-lg mb-6">
            I když se to zdálo prakticky nemožné, tak iPhone 13 posouvá kvalitu fotoaparátů na úplně nový level. Zcela nový širokoúhlý fotoaparát má snímač s 1,7 µm pixely pro méně šumu a rychlejší závěrku potřebnou pro kvalitní snímky za různých světelných podmínek. Ve spojení s clonou ƒ/1,6 nabízí
            širokoúhlý fotoaparát iPhone 13 obrovské zlepšení v situacích se slabým osvětlením, a to až 2,2× ve srovnání s iPhonem 12 Pro a téměř 1,5× ve srovnání s iPhonem 12 Pro Max. Optická stabilizace obrazu (OIS) s posunem snímače je k dispozici u obou modelů a stabilizuje snímač namísto
            objektivu, takže snímky jsou plynulé a video stabilní, i když se pohybujete. Rovněž budete mít k dispozici ultraširokoúhlou kameru se 120stupňovým zorným polem.
          </p>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Umí 5G</h2>
          <p className="text-lg mb-6">
            Samozřejmostí pro iPhone 13 je integrovaná podpora mobilních sítí 5. generace, pro které Apple využívá svůj vlastní čip s nízkou spotřebou energie. Díky tomu má technologii plně pod kontrolou. Zajímavostí je funkce Smart Data Mode s automatickým přepínáním mezi vhodnými sítěmi.
          </p>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Chrání vaše soukromí</h2>
          <p className="text-lg mb-6">Apple iPhone 13 je maximálně bezpečný chytrý telefon, který disponuje přesným rozpoznáním obličeje pomocí technologie Face ID. Další bezpečností vrstvu telefonu Apple iPhone 13 pak tvoří operační systém iOS 15 s celou řadou nových funkcí a vylepšení.</p>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">A15 Bionic</h2>
          <p className="text-lg mb-6">
            Apple A15 Bionic je nejrychlejší čip používaný v chytrých telefonech. Jde o superrychlý čip vyráběný 5nm technologií složený ze 2 výkonných a 4 efektivních výpočetních jader. Ty doprovází výrazně silnější neurální engine. A 5jádrová grafika je až o 50 % výkonnější než jakýkoli
            konkurenční čip. Mobilní telefon Apple iPhone 13 má výkonu víc než dost.
          </p>
        </section>
        <section className="max-w-screen-xl mx-auto px-8 pb-16 sm:grid grid-cols-2 gap-16 items-center">
          <div className="mb-8 sm:mb-0">
            <img src="./assets/domu_oproduktu.png" alt="iPhone 13 Pro" className="my-auto" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nej. Víc. Pro</h2>
            <a href="kdezakoupit.html" className="btn btn-primary">
              Kde zakoupit?
            </a>
          </div>
        </section>
        <section className="max-w-screen-xl mx-auto px-8 pb-16">
          <h2 className="text-3xl font-bold text-slate-700 mb-2">Kontakt</h2>
          <p className="text-lg mb-6 text-slate-500">
            One Apple Park Way
            <br />
            Cupertino, CA 95014
            <br />
            +1 408 996-1010
          </p>
        </section>
      </main>
    </>
  );
}
