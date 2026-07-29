"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const desserts = [
"Bento Cake",
"Mini Cake",
"Cupcakes",
"Tiramisu",
];

const bases = [
"Vanille",
"Chocolat",
"Red Velvet",
"Citron",
];

const parfumsTiramisu = [
  "Fraise",
  "Framboise",
  "Mangue Passion",
  "Ananas",
  "Citron meringué",
  "Chocolat Noisette",
];

const quantitesTiramisu = [
  "1 verrine",
  "2 verrines",
  "4 verrines",
  "6 verrines",
  "12 verrines",
];

const parfumsCupcakes = [
  "Vanille",
  "Chocolat",
  "Red Velvet",
  "Citron",
  "Pistache",
  "Cookies",
  "Caramel",
  "Kinder",
  "Oreo",
];

const taillesCupcakes = [
  "Boîte de 6",
  "Boîte de 12",
  "Boîte de 24",
];

const fruits = [
"Fraise",
"Framboise",
"Mangue",
"Myrtille",
"Kiwi",
"Ananas",
];

const fruitsTiramisu = [
  "Aucun",
  "Fraise",
  "Framboise",
  "Mangue",
  "Ananas",
  "Myrtille",
  "Fruit de la passion",
];

const fourrages = [
"Aucun",
"Mangue Passion",
"Framboise",
"Chocolat Noisette",
"Citron",
];

const couleurs = [
  { nom: "Rose pastel", code: "#F8BBD0" },
  { nom: "Rose", code: "#F48FB1" },
  { nom: "Rouge", code: "#E53935" },
  { nom: "Rouge Velvet", code: "#8B1E3F" },
  { nom: "Violet", code: "#CE93D8" },
  { nom: "Bleu ciel", code: "#90CAF9" },
  { nom: "Vert", code: "#A5D6A7" },
  { nom: "Jaune", code: "#FFE082" },
  { nom: "Blanc", code: "#FFFFFF" },
  { nom: "Noir", code: "#000000" },
];

export default function CommanderPage() {
const [dessert, setDessert] = useState("");
const [base, setBase] = useState("");
const [tailleCupcakes, setTailleCupcakes] = useState("");
const [parfumsSelectionnes, setParfumsSelectionnes] = useState<string[]>([]);
const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
const [fourrage, setFourrage] = useState("");
const [couleur, setCouleur] = useState("");
const [parfumTiramisu, setParfumTiramisu] = useState("");
const [fruitTiramisu, setFruitTiramisu] = useState("");
const [quantiteTiramisu, setQuantiteTiramisu] = useState("");
const [message, setMessage] = useState("");
const [dateRetrait, setDateRetrait] = useState("");
const [heure, setHeure] = useState("");
const [showPopup, setShowPopup] = useState(false);
const router = useRouter();
let prix = 0;

if (dessert === "Cupcakes") {
  if (tailleCupcakes === "Boîte de 6") prix = 22;
  if (tailleCupcakes === "Boîte de 12") prix = 42;
  if (tailleCupcakes === "Boîte de 24") prix = 80;
}

if (dessert === "Tiramisu") {
  if (quantiteTiramisu === "1 verrine") prix = 5;
  if (quantiteTiramisu === "2 verrines") prix = 9;
  if (quantiteTiramisu === "4 verrines") prix = 17;
  if (quantiteTiramisu === "6 verrines") prix = 25;
  if (quantiteTiramisu === "12 verrines") prix = 48;
}

if (dessert === "Bento Cake") {
  prix = 25;
}

if (dessert === "Mini Cake") {
  prix = 4;
}

function toggleFruit(fruit: string) {
if (selectedFruits.includes(fruit)) {
setSelectedFruits(selectedFruits.filter(f => f !== fruit));
return;
}

if (selectedFruits.length < 3) {
setSelectedFruits([...selectedFruits, fruit]);
}
}
function toggleParfum(parfum: string) {
  let limite = 0;

  if (tailleCupcakes === "Boîte de 6") limite = 2;
  if (tailleCupcakes === "Boîte de 12") limite = 3;
  if (tailleCupcakes === "Boîte de 24") limite = 4;

  if (parfumsSelectionnes.includes(parfum)) {
    setParfumsSelectionnes(
      parfumsSelectionnes.filter((p) => p !== parfum)
    );
    return;
  }

  if (limite > 0 && parfumsSelectionnes.length >= limite) {
    alert(`Maximum ${limite} parfum(s) pour cette boîte.`);
    return;
  }

  setParfumsSelectionnes([
    ...parfumsSelectionnes,
    parfum,
  ]);
}
const formulaireComplet =
  (dessert === "Bento Cake" &&
    base &&
    selectedFruits.length > 0 &&
    dateRetrait &&
    heure) ||

  (dessert === "Mini Cake" &&
    base &&
    selectedFruits.length > 0 &&
    dateRetrait &&
    heure) ||

  (dessert === "Cupcakes" &&
    tailleCupcakes &&
    parfumsSelectionnes.length > 0 &&
    dateRetrait &&
    heure) ||

  (dessert === "Tiramisu" &&
    parfumTiramisu &&
    quantiteTiramisu &&
    dateRetrait &&
    heure);
return (
<main className="min-h-screen bg-[#FFF9F8] py-12 px-6">

<div className="max-w-3xl mx-auto">

<h1 className="text-4xl font-bold text-center">
Créez votre dessert
</h1>

<p className="text-center text-gray-500 mt-4">
Personnalisez votre création étape par étape.
</p>

{/* Dessert */}

<section className="mt-12">

<h2 className="text-2xl font-semibold mb-5">
1. Choisissez votre dessert
</h2>

<div className="grid grid-cols-2 gap-4">

  {[
    {
      nom: "Bento Cake",
      image: "/images/bento cake.jpg",
      description: "Pour 2 personnes",
    },
    {
      nom: "Cupcakes",
      image: "/images/cupcakes.jpg",
      description: "Boîtes de 6, 12 ou 24",
    },
    {
      nom: "Tiramisu",
      image: "/images/tiramisu.jpg",
      description: "Verrine gourmande",
    },
    {
      nom: "Mini Cake",
      image: "/images/minicake.jpg",
      description: "Format individuel",
    },
  ].map((item) => (
    <button
      key={item.nom}
      onClick={() => setDessert(item.nom)}
      className={`relative overflow-hidden rounded-3xl border-2 shadow-lg min-w-[260px]
        dessert === item.nom
          ? "border-pink-500 ring-2 ring-pink-300"
          : "border-gray-200"
      }`}
    >
      <img
        src={item.image}
        alt={item.nom}
        className="w-full h-56 object-cover"
      />
    {dessert === item.nom && (
      <div className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
        ✓ Sélectionné
      </div>
    )}
      <div className="p-4 text-left">
        <h3 className="text-xl font-bold">{item.nom}</h3>
        <p className="text-gray-500">{item.description}</p>
      </div>
    </button>
  ))}
</div>

</section>

{/* Base */}

{(dessert === "Bento Cake" || dessert === "Mini Cake") && (

<section className="mt-12">

<h2 className="text-2xl font-semibold mb-5">
2. Choisissez une base
</h2>

<div className="grid grid-cols-2 gap-4">

{bases.map(item => (

<button
key={item}
onClick={() => setBase(item)}
className={`rounded-2xl border p-5 transition
${
base === item
? "bg-pink-600 text-white"
: "bg-white hover:border-pink-500"
}`}
>
{item}
</button>

))}

</div>

</section>
)}
{dessert === "Cupcakes" && (
  <section className="mt-12">
    <h2 className="text-2xl font-semibold mb-5">
      3. Taille de la boîte
    </h2>

    <div className="grid grid-cols-3 gap-4">
      {taillesCupcakes.map((taille) => (
        <button
          key={taille}
          type="button"
          onClick={() => setTailleCupcakes(taille)}
          className={`rounded-2xl border p-4 transition ${
            tailleCupcakes === taille
              ? "bg-pink-600 text-white"
              : "bg-white hover:border-pink-500"
          }`}
        >
          {taille}
        </button>
      ))}
    </div>
  </section>
)}
{dessert === "Cupcakes" && (
  <section className="mt-12">
    <h2 className="text-2xl font-semibold mb-5">
      4. Parfums des cupcakes
    </h2>

    <div className="grid grid-cols-2 gap-4">
      {parfumsCupcakes.map((parfum) => (
        <button
          key={parfum}
          type="button"
          onClick={() => toggleParfum(parfum)}
          className={`rounded-2xl border p-4 transition ${
            parfumsSelectionnes.includes(parfum)
              ? "bg-pink-600 text-white"
              : "bg-white hover:border-pink-500"
          }`}
        >
          {parfum}
        </button>
      ))}
    </div>

    <p className="mt-4 text-gray-600">
      <strong>Parfums sélectionnés :</strong>{" "}
      {parfumsSelectionnes.join(", ") || "Aucun"}
    </p>
  </section>
)}

{/* Fruits */}

{(dessert === "Bento Cake" || dessert === "Mini Cake") && (

<section className="mt-12">

<h2 className="text-2xl font-semibold">
3. Fruits
</h2>

<p className="text-gray-500 mb-5">
Facultatif • Maximum 3 fruits
</p>

<div className="grid grid-cols-2 gap-4">

{fruits.map(fruit => (

<button
key={fruit}
onClick={() => toggleFruit(fruit)}
className={`rounded-2xl border p-5 transition
${
selectedFruits.includes(fruit)
? "bg-pink-600 text-white"
: "bg-white"
}`}
>
{fruit}
</button>

))}

</div>

</section>
)}

{/* Fourrage */}

{(dessert === "Bento Cake" || dessert === "Mini Cake") && (

<section className="mt-12">

<h2 className="text-2xl font-semibold">
4. Fourrage
</h2>

<p className="text-gray-500 mb-5">
Facultatif
</p>

<select
value={fourrage}
onChange={(e) => setFourrage(e.target.value)}
className="w-full rounded-xl border p-4"
>
<option value="">Choisissez</option>

{fourrages.map(item => (
<option key={item}>
{item}
</option>
))}

</select>

</section>
)}

{/* Couleur */}

{(dessert === "Bento Cake" || dessert === "Mini Cake") && (

<section className="mt-12">

<h2 className="text-2xl font-semibold mb-5">
5. Couleur principale
</h2>

<div className="flex gap-4 flex-wrap">

{couleurs.map(color => (

<button
key={color.code}
onClick={() => setCouleur(color.code)}
style={{ background: color.code }}
className={`w-12 h-12 rounded-full border-4 ${
couleur === color.code
? "border-pink-600"
: "border-white"
}`}
/>

))}

</div>

</section>
)}

{/* Message */}

{(dessert === "Bento Cake" || dessert === "Mini Cake") && (

<section className="mt-12">

<h2 className="text-2xl font-semibold mb-5">
6. Message
</h2>

<textarea
value={message}
onChange={(e) => setMessage(e.target.value)}
placeholder="Votre message..."
className="w-full rounded-xl border p-4 h-36"
/>

</section>
)}
{dessert === "Tiramisu" && (
  <section className="mt-12">
    <h2 className="text-2xl font-bold mb-4 text-pink-600">
      Choisissez le parfum
    </h2>

    <div className="flex flex-wrap gap-4">
      {parfumsTiramisu.map((parfum) => (
        <button
          key={parfum}
          type="button"
          onClick={() => setParfumTiramisu(parfum)}
          className={`px-5 py-3 rounded-full border-2 transition ${
            parfumTiramisu === parfum
              ? "bg-pink-500 text-white border-pink-500"
              : "bg-white border-pink-300 hover:bg-pink-100"
          }`}
        >
          {parfum}
        </button>
      ))}
    </div>
  </section>
)}
{dessert === "Tiramisu" && (
<section className="mt-8">
  <h2 className="text-2xl font-bold mb-4 text-pink-600">
    Choisissez les fruits (facultatif)
  </h2>

  <div className="flex flex-wrap gap-4">
    {fruitsTiramisu.map((fruit) => (
      <button
        key={fruit}
        type="button"
        onClick={() => setFruitTiramisu(fruit)}
        className={`px-5 py-3 rounded-full border-2 transition ${
          fruitTiramisu === fruit
            ? "bg-pink-500 text-white border-pink-500"
            : "bg-white border-pink-300 hover:bg-pink-100"
        }`}
      >
        {fruit}
      </button>
    ))}
  </div>
</section>
)}
{dessert === "Tiramisu" && (
<section className="mt-8">
  <h2 className="text-2xl font-bold mb-4 text-pink-600">
    Choisissez la quantité
  </h2>

  <div className="flex flex-wrap gap-4">
    {quantitesTiramisu.map((quantite) => (
      <button
        key={quantite}
        type="button"
        onClick={() => setQuantiteTiramisu(quantite)}
        className={`px-5 py-3 rounded-full border-2 transition ${
          quantiteTiramisu === quantite
            ? "bg-pink-500 text-white border-pink-500"
            : "bg-white border-pink-300 hover:bg-pink-100"
        }`}
      >
        {quantite}
      </button>
    ))}
  </div>
</section>
)}

{/* Date de retrait */}

<section className="mt-12">
<h2 className="text-2xl font-semibold">
7. Date de retrait
</h2>

<input
  type="date"
  value={dateRetrait}
  onChange={(e) => setDateRetrait(e.target.value)}
  className="mt-4 w-full rounded-2xl border p-4"
/>
</section>


{/* Heure */}

<section className="mt-12">
<h2 className="text-2xl font-semibold">
8. Heure de retrait
</h2>
<select
  value={heure}
  onChange={(e) => setHeure(e.target.value)}
  className="mt-4 w-full rounded-2xl border p-4"
>
  <option value="">Choisissez une heure</option>
  <option value="09:00">09:00</option>
  <option value="09:30">09:30</option>
  <option value="10:00">10:00</option>
  <option value="10:30">10:30</option>
  <option value="11:00">11:00</option>
  <option value="11:30">11:30</option>
  <option value="12:00">12:00</option>
  <option value="12:30">12:30</option>
  <option value="13:00">13:00</option>
  <option value="13:30">13:30</option>
  <option value="14:00">14:00</option>
  <option value="14:30">14:30</option>
  <option value="15:00">15:00</option>
  <option value="15:30">15:30</option>
  <option value="16:00">16:00</option>
  <option value="16:30">16:30</option>
  <option value="17:00">17:00</option>
  <option value="17:30">17:30</option>
  <option value="18:00">18:00</option>
</select>

</section>

{/* Résumé */}

<section className="mt-16 bg-white rounded-3xl shadow p-8">

<h2 className="text-3xl font-bold mb-6">
Votre commande
</h2>
<p><strong>Dessert :</strong> {dessert}</p>
{dessert === "Cupcakes" && (
  <>
    <p><strong>Boîte :</strong> {tailleCupcakes}</p>
    <p><strong>Parfums :</strong> {parfumsSelectionnes.join(", ")}</p>
  </>
)}
<p className="mt-4 text-2xl font-bold text-pink-600">
  💖 Total : {prix} €
</p>

{dessert === "Tiramisu" && (
  <>
    <p><strong>Parfum :</strong> {parfumTiramisu}</p>
    <p><strong>Fruits :</strong> {fruitTiramisu || "Aucun"}</p>
    <p><strong>Quantité :</strong> {quantiteTiramisu}</p>
  </>
)}

{(dessert === "Bento Cake" || dessert === "Mini Cake") && (
  <p><strong>Base :</strong> {base}</p>
)}

{(dessert === "Bento Cake" || dessert === "Mini Cake") && (
  <p><strong>Fruits :</strong> {selectedFruits.join(", ")}</p>
)}

{(dessert === "Bento Cake" || dessert === "Mini Cake") && (
  <p><strong>Fourrage :</strong> {fourrage}</p>
)}

{(dessert === "Bento Cake" || dessert === "Mini Cake") && (
  <p>
    <strong>Couleur :</strong>{" "}
    {couleurs.find(c => c.code === couleur)?.nom}
  </p>
)}

{(dessert === "Bento Cake" || dessert === "Mini Cake") && (
  <p><strong>Message :</strong> {message}</p>
)}

<button
  onClick={() => {
    const panier = JSON.parse(localStorage.getItem("panier") || "[]");

    panier.push({
  dessert,

  base,

  fruits:
    dessert === "Tiramisu"
      ? fruitTiramisu
      : selectedFruits,

  fourrage,

  couleur:
    dessert === "Tiramisu"
      ? ""
      : couleurs.find(c => c.code === couleur)?.nom,

  message,

  parfumTiramisu:
  dessert === "Tiramisu" ? parfumTiramisu : "",

quantiteTiramisu:
  dessert === "Tiramisu" ? quantiteTiramisu : "",

  tailleCupcakes,

  parfumsCupcakes: parfumsSelectionnes,
  
  prix,
  
  date: dateRetrait,

  heure,
});
    localStorage.setItem("panier", JSON.stringify(panier));

    setShowPopup(true);
  }}
  disabled={!formulaireComplet}
  className={`mt-8 w-full py-4 rounded-full text-white font-semibold transition ${
    formulaireComplet
      ? "bg-pink-600 hover:bg-pink-700"
      : "bg-gray-300 cursor-not-allowed"
  }`}
>
  Ajouter au panier • {prix} €
</button>
</section>
</div>
{showPopup && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-[90%] max-w-md text-center">

      <h2 className="text-2xl font-bold text-pink-600">
        🎉 Dessert ajouté !
      </h2>

      <p className="mt-3 text-gray-600">
        Votre dessert a bien été ajouté au panier.
      </p>

      <div className="mt-6 space-y-3">

        <button
          onClick={() => {
           setShowPopup(false);

           setDessert("");
           setBase("");
           setSelectedFruits([]);
           setFourrage("");
           setCouleur("");
           setMessage("");
           setDateRetrait("");
           setHeure("");
          }}
          className="w-full bg-pink-600 text-white py-3 rounded-full hover:bg-pink-700"
        >
          Continuer mes achats
        </button>

        <button
          onClick={() => router.push("/panier")}
          className="w-full border-2 border-pink-600 text-pink-600 py-3 rounded-full hover:bg-pink-50"
        >
          Voir mon panier
        </button>

      </div>
    </div>
  </div>
)}
</main>
);
}