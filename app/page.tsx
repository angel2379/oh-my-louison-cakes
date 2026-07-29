import Header from "../components/Header";
import Link from "next/link";
import {
Lightbulb,
Palette,
CalendarDays,
CakeSlice,
} from "lucide-react";
export default function Home() {
return (
<>
<Header />

<main className="min-h-screen bg-[#FFF9F8]">

<section className="flex flex-col items-center justify-center pt-2 pb-16 px-6">

<h2 className="text-4xl md:text-6xl font-bold text-center text-gray-800">
Votre dessert,
<br />
votre création.
</h2>

<p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">
Créez un dessert unique en choisissant votre base, vos fruits,
votre décoration et votre message personnalisé.
</p>

<Link
href="/commander"
className="mt-8 bg-pink-600 hover:bg-pink-700 transition text-white px-8 py-4 rounded-full font-semibold"
>
🍰 Créer mon dessert
</Link>
<section className="max-w-6xl mx-auto px-6 py-20">

<h2 className="text-4xl font-bold text-center text-gray-800">
Comment ça fonctionne ?
</h2>

<p className="text-center text-gray-500 text-lg mt-4 mb-16">
Imaginez votre dessert. Nous nous occupons du reste.
</p>
<div className="mt-12 flex flex-col items-center gap-8">

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl font-bold">
<Lightbulb size={28} />
</div>
<h3 className="mt-4 text-xl font-semibold text-gray-800">
Vous imaginez
</h3>
<p className="mt-2 text-gray-500 max-w-xs">
Choisissez le dessert qui vous fait envie.
</p>
</div>

<div className="h-10 w-px bg-pink-300"></div>

<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl font-bold">
<Palette size={28} />
</div>
<h3 className="mt-4 text-xl font-semibold text-gray-800">
Vous personnalisez
</h3>
<p className="mt-2 text-gray-500 max-w-xs">
Choisissez les saveurs, les fruits, les couleurs et votre message.
</p>
</div>

<div className="h-10 w-px bg-pink-300"></div>

<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl font-bold">
<CalendarDays size={28} />
</div>
<h3 className="mt-4 text-xl font-semibold text-gray-800">
Vous validez
</h3>
<p className="mt-2 text-gray-500 max-w-xs">
Choisissez votre date et votre heure de retrait.
</p>
</div>

<div className="h-10 w-px bg-pink-300"></div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl font-bold">
<CakeSlice size={28} />
</div>
<h3 className="mt-4 text-xl font-semibold text-gray-800">
Nous créons
</h3>
<p className="mt-2 text-gray-500 max-w-xs">
Nous réalisons votre dessert avec soin, prêt à être dégusté.
</p>
</div>

</div>

</section>
<section className="max-w-6xl mx-auto px-8 pb-20">

<div className="text-center">
<p className="italic text-pink-500 text-xl">
« Ici, chaque dessert commence par votre imagination. »
</p>

<div className="w-20 h-1 bg-pink-300 rounded-full mx-auto mt-6"></div>
</div>

<h2 className="text-3xl font-bold text-center text-gray-800 mt-16">
Ce qui rend chaque création unique
</h2>

<p className="text-center text-gray-500 mt-4 mb-14">
Parce qu'un dessert est encore plus spécial lorsqu'il vous ressemble.
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white rounded-3xl shadow-sm p-8 border border-pink-100">
<h3 className="text-2xl font-semibold text-pink-600 mb-3">
🍓 Créations fruitées
</h3>
<p className="text-gray-600">
Des fruits soigneusement sélectionnés pour apporter fraîcheur, équilibre et gourmandise à chaque création.
</p>
</div>

<div className="bg-white rounded-3xl shadow-sm p-8 border border-pink-100">
<h3 className="text-2xl font-semibold text-pink-600 mb-3">
🎨 Personnalisation complète
</h3>
<p className="text-gray-600">
Choisissez votre dessert, vos saveurs, vos fruits, vos couleurs et votre message pour une création qui vous ressemble.
</p>
</div>

<div className="bg-white rounded-3xl shadow-sm p-8 border border-pink-100">
<h3 className="text-2xl font-semibold text-pink-600 mb-3">
👩‍🍳 Fabrication artisanale
</h3>
<p className="text-gray-600">
Chaque dessert est préparé à la commande avec soin afin de garantir fraîcheur et qualité.
</p>
</div>

<div className="bg-white rounded-3xl shadow-sm p-8 border border-pink-100">
<h3 className="text-2xl font-semibold text-pink-600 mb-3">
📍 Retrait simple
</h3>
<p className="text-gray-600">
Choisissez la date et l'heure de retrait qui vous conviennent. Nous nous occupons du reste.
</p>
</div>

</div>

</section>
<section className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-center">

<span className="text-pink-500 font-semibold uppercase tracking-widest">
Mon histoire
</span>

<h2 className="text-4xl font-bold text-gray-800 mt-4">
Une passion née d'un nouveau départ.
</h2>

<p className="mt-8 text-lg leading-9 text-gray-600">
Oh! My Louison Cakes est né d'une envie simple : créer des desserts
qui donnent le sourire. Après avoir dû repenser mon alimentation,
j'ai découvert une nouvelle façon de pâtisser, où les fruits occupent
une place essentielle.
</p>

<p className="mt-6 text-lg leading-9 text-gray-600">
Aujourd'hui, chaque création est imaginée avec soin et réalisée à la
commande. Mon objectif est de proposer des desserts aussi beaux que
gourmands, que chacun peut personnaliser selon ses envies.
</p>

<Link
href="/histoire"
className="inline-block mt-12 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold transition"
>
Découvrir mon histoire
</Link>

</section>

</section>
<footer className="bg-pink-50 border-t border-pink-100 mt-5">

<div className="max-w-6xl mx-auto px-6 py-16 text-center">

<h2 className="text-3xl font-bold text-pink-600">
Oh! My Louison Cakes
</h2>

<p className="mt-3 text-gray-600 italic">
Des créations fruitées faites avec amour.
</p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

<div>
<p className="text-pink-600 text-xl">📍</p>
<h3 className="font-semibold text-gray-800 mt-2">Adresse</h3>
<p className="text-gray-600">
Paris
</p>
</div>

<div>
<p className="text-pink-600 text-xl">📞</p>
<h3 className="font-semibold text-gray-800 mt-2">Téléphone</h3>
<p className="text-gray-600">
07 52 08 73 72
</p>
</div>

<div>
<p className="text-pink-600 text-xl">🕒</p>
<h3 className="font-semibold text-gray-800 mt-2">Horaires</h3>
<p className="text-gray-600">
Lun - Sam<br />
10h00 - 18h45
</p>
</div>

</div>

<div className="w-24 h-px bg-pink-200 mx-auto my-10"></div>

<p className="text-gray-500 text-sm">
© 2026 Oh! My Louison Cakes — Tous droits réservés.
</p>

</div>

</footer>
</main>
</>
);
}