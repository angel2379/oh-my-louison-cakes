"use client";

import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";
export default function FinaliserPage() {
 const [panier, setPanier] = useState<any[]>([]);
 const [modeReception, setModeReception] = useState("Retrait en boutique");
 const [adresse, setAdresse] = useState("");
 const [codePostal, setCodePostal] = useState("");
 const fraisLivraison =
modeReception === "Livraison" ? 5 : 0;

const total =
panier.reduce((somme, dessert) => somme + dessert.prix, 0) +
fraisLivraison;
const codesIDF = ["75", "77", "78", "91", "92", "93", "94", "95"];

const livraisonPossible =
modeReception === "Retrait en boutique" ||
codesIDF.includes(codePostal.substring(0, 2));
useEffect(() => {
const data = JSON.parse(localStorage.getItem("panier") || "[]");
setPanier(data);
}, []);   
async function payerAvecSumUp() {
if (!livraisonPossible) {
alert("Nous livrons uniquement en Île-de-France.");
return;
}
await supabase.from("commandes").insert({
  nom: "Client",
  dessert: panier.map((d) => d.dessert).join(", "),
  prix: total,
  date_retrait: "À confirmer",
  statut: "En attente",
});
const reponse = await fetch("/api/sumup/checkout", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
amount: total ,
}),
});

const resultat = await reponse.json();
window.location.href = resultat.data.hosted_checkout_url;
}
return (
<main className="min-h-screen bg-[#FFF9F8] px-6 py-12">
<div className="max-w-3xl mx-auto">
<h1 className="text-4xl font-bold text-center text-pink-600 mb-4">
Finaliser ma commande
</h1>

<p className="text-center text-gray-600">
Encore une étape avant de savourer votre création 💖
</p>
<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">
<h2 className="text-2xl font-semibold text-pink-600 mb-6">
Vos informations
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input
type="text"
placeholder="Prénom"
className="border rounded-xl p-3"
/>

<input
type="text"
placeholder="Nom"
className="border rounded-xl p-3"
/>
<input
type="email"
placeholder="E-mail"
className="border rounded-xl p-3 mt-4"
/>
<input
type="tel"
placeholder="Téléphone"
className="border rounded-xl p-3 mt-4"
/>
<div className="mt-6">
<label className="block text-gray-700 font-medium mb-2">
Mode de réception
</label>

<select
  value={modeReception}
  onChange={(e) => setModeReception(e.target.value)}
  className="w-full border rounded-xl p-3"
>
<option>Retrait en boutique</option>
<option>Livraison</option>
</select>
{modeReception === "Livraison" && (
<div className="space-y-4 mt-4">
<input
type="text"
placeholder="Adresse"
value={adresse}
onChange={(e) => setAdresse(e.target.value)}
className="w-full border rounded-xl p-3"
/>

<input
type="text"
placeholder="Code postal"
value={codePostal}
onChange={(e) => setCodePostal(e.target.value)}
className="w-full border rounded-xl p-3"
/>
</div>
)}
{modeReception === "Livraison" &&
codePostal.length >= 2 &&
!livraisonPossible && (
<p className="text-red-600 font-medium">
Désolé, nous livrons uniquement en Île-de-France.
</p>
)}
<div className="mt-4">
<label className="block text-gray-700 font-medium mb-2">
Date de retrait ou de livraison
</label>

<input
type="date"
className="w-full border rounded-xl p-3"
/>
<div className="mt-4">
<label className="block text-gray-700 font-medium mb-2">
Heure de retrait ou de livraison
</label>

<input
type="time"
className="w-full border rounded-xl p-3"
/>
<div className="bg-pink-50 rounded-3xl p-6 mt-8">
<h2 className="text-2xl font-semibold text-pink-600 mb-4">
Récapitulatif de votre commande
</h2>

<div className="space-y-3">
{panier.map((dessert, index) => (
<div
key={index}
className="flex justify-between border-b pb-2"
>
<div>
<p className="font-semibold">🍰 {dessert.dessert}</p>

<p className="text-sm text-gray-500">
Base : {dessert.base}
</p>

<p className="text-sm text-gray-500">
Fruits : {Array.isArray(dessert.fruits)
? dessert.fruits.join(", ")
: dessert.fruits}
</p>

<p className="text-sm text-gray-500">
Message : "{dessert.message}"
</p>
</div>
<span>{dessert.prix} €</span>
</div>
))}

<div className="flex justify-between text-xl font-bold pt-4">
<span>Total</span>
<span>
{total} €
</span>
</div>
</div>
</div>

<div className="mt-8">
<button
onClick={payerAvecSumUp}
disabled={!livraisonPossible}
className={`w-full py-4 rounded-full text-lg font-semibold text-white ${
livraisonPossible
? "bg-pink-600 hover:bg-pink-700"
: "bg-gray-400 cursor-not-allowed"
}`}
>
💳 Payer ma commande
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
);
}