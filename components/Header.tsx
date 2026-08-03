"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  ShoppingBag,
  User,
  X,
  Home,
  Cake,
  Package,
  Info,
  Phone,
  FileText,
  Shield,
} from "lucide-react";

export default function Header() {
const [nbArticles, setNbArticles] = useState(0);
const [panierOuvert, setPanierOuvert] = useState(false);
const [menuOuvert, setMenuOuvert] = useState(false);
const [compteOuvert, setCompteOuvert] = useState(false);
const [panier, setPanier] = useState<any[]>([])
function supprimerArticle(index: number) {
  const nouveauPanier = [...panier];
  nouveauPanier.splice(index, 1);

  setPanier(nouveauPanier);
  setNbArticles(nouveauPanier.length);

  localStorage.setItem(
    "panier",
    JSON.stringify(nouveauPanier)
  );
}

useEffect(() => {
const chargerPanier = () => {
const panier = JSON.parse(localStorage.getItem("panier") || "[]");
setNbArticles(panier.length);
setPanier(panier);
};

chargerPanier();

window.addEventListener("storage", chargerPanier);

return () => {
window.removeEventListener("storage", chargerPanier);
};
}, []);
return (
<>
{/* Barre d'informations */}
<div className="bg-[#3F6663] text-white">
<div className="max-w-7xl mx-auto px-6 py-3 flex justify-center gap-8 text-sm font-medium flex-wrap">
<span>📍 Paris</span>
<span>📞 07 52 08 73 72</span>
<span>Lun - Sam : 10h - 18h45</span>
</div>
</div>

{/* Navigation */}
<header className="bg-white">
<div className="max-w-7xl mx-auto px-8 py-2 grid grid-cols-3 items-center">

<div className="flex items-center justify-start">
<button>
<Menu size={34} className="text-[#3F6663]" />
</button>
</div>

<div className="flex items-center justify-center">
<Image
src="/logo-header.png"
alt="Oh! My Louison Cakes"
width={100}
height={100}
priority
/>
</div>

<div className="flex items-center justify-end gap-5">
<button
  onClick={() => {
  console.log("clic");
  setCompteOuvert(true);
}}
  className="hover:scale-110 transition"
>
  <User className="text-[#3F6663]" size={28} />
</button>
<button
  onClick={() => setPanierOuvert(true)}
  className="relative"
 > 
 <ShoppingBag className="text-[#3F6663]" size={28} />
{nbArticles > 0 && (
<span className="absolute -top-3 -right-3 bg-pink-600 text-white rounded-full w-7 h-7 text-sm font-bold flex items-center justify-center shadow-lg border-2 border-white">
{nbArticles}
</span>
)}
</button>
</div>

</div>
</header>
{panierOuvert && (
<>
<div
className="fixed inset-0 bg-black/40 z-40"
onClick={() => setPanierOuvert(false)}
/>

<div className="fixed right-0 top-0 h-full w-[420px] bg-white shadow-2xl z-50 p-6 overflow-auto">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-bold">Mon panier</h2>

<button
onClick={() => setPanierOuvert(false)}
className="text-2xl"
>
✕
</button>
</div>

<div className="flex-1 overflow-y-auto">

{panier.length === 0 ? (
<p className="text-gray-500 text-center mt-12">
Votre panier est vide.
</p>
) : (
panier.map((dessert: any, index: number) => (
<div
key={index}
className="relative border-b pb-5 mb-5"
>
<h3 className="font-bold text-lg">
{dessert.dessert}
<button
  onClick={() => supprimerArticle(index)}
  className="absolute top-2 right-2 text-red-500 text-xl hover:text-red-700"
>
  🗑️
</button>
</h3>

<p className="text-gray-500">
{dessert.prix} €
</p>

{dessert.tailleCupcakes && (
<p className="text-sm text-gray-500">
<strong>Boîte :</strong> {dessert.tailleCupcakes}
</p>
)}

{dessert.parfumsCupcakes?.length > 0 && (
<p className="text-sm text-gray-500">
<strong>Parfums :</strong> {dessert.parfumsCupcakes.join(", ")}
</p>
)}

{dessert.base && (
<p className="text-sm text-gray-500">
<strong>Base :</strong> {dessert.base}
</p>
)}

{dessert.fruits && (
<p className="text-sm text-gray-500">
<strong>Fruits :</strong>{" "}
{Array.isArray(dessert.fruits)
? dessert.fruits.join(", ")
: dessert.fruits}
</p>
)}

{dessert.fourrage && (
<p className="text-sm text-gray-500">
<strong>Fourrage :</strong> {dessert.fourrage}
</p>
)}

{dessert.couleur && (
<p className="text-sm text-gray-500">
<strong>Couleur :</strong> {dessert.couleur}
</p>
)}

{dessert.message && (
<p className="text-sm text-gray-500">
<strong>Message :</strong> {dessert.message}
</p>
)}

{dessert.parfumTiramisu && (
<p className="text-sm text-gray-500">
<strong>Parfum :</strong> {dessert.parfumTiramisu}
</p>
)}

{dessert.quantiteTiramisu && (
<p className="text-sm text-gray-500">
<strong>Quantité :</strong> {dessert.quantiteTiramisu}
</p>
)}

{dessert.date && (
<p className="text-sm text-gray-500">
<strong>Date :</strong> {dessert.date}
</p>
)}

{dessert.heure && (
<p className="text-sm text-gray-500">
<strong>Heure :</strong> {dessert.heure}
</p>
)}
</div>
))
)}

</div>

<div className="border-t pt-6 mt-6">

<div className="flex justify-between text-xl font-bold mb-6">
<span>Total</span>

<span>
{panier.reduce(
(total, dessert) => total + dessert.prix,
0
)} €
</span>
</div>

<Link
href="/finaliser"
onClick={() => setPanierOuvert(false)}
className="block w-full text-center bg-pink-600 text-white py-4 rounded-xl font-bold text-lg"
>
💳 Payer maintenant
</Link>

</div>
{compteOuvert && (
  <div className="absolute top-16 right-4 bg-white shadow-xl rounded-2xl p-4 w-64 z-50">

    <h3 className="font-bold text-[#3F6663] mb-3">
      👤 Mon compte
    </h3>

   <Link
     href="/connexion"
     className="block w-full text-left py-2 hover:text-pink-500"
   >
     Se connecter
   </Link>

   <Link
     href="/inscription"
     className="block w-full text-left py-2 hover:text-pink-500"
   >
     Créer un compte
    </Link>
  </div>
)}
</div>
</>
)}

</>
);
}