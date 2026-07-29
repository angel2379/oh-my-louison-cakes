"use client";

import { useEffect, useState } from "react";

type Dessert = {
  dessert: string;
  base: string;
  fruits: string[] | string;
  fourrage: string;
  couleur: string;
  message: string;

  parfumTiramisu?: string;
  quantiteTiramisu?: string;

  tailleCupcakes?: string;
  parfumsCupcakes?: string[];

  date: string;
  heure: string;
  prix: number;
};

export default function PanierPage() {
  const [panier, setPanier] = useState<Dessert[]>([]);
  const total = panier.reduce((somme, item) => {
  return somme + item.prix;
 }, 0);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("panier") || "[]");
    setPanier(data);
  }, []);

  function supprimer(index: number) {
    const nouveauPanier = [...panier];
    nouveauPanier.splice(index, 1);

    setPanier(nouveauPanier);
    localStorage.setItem("panier", JSON.stringify(nouveauPanier));
  }
  async function payerAvecSumUp() {
  const reponse = await fetch("/api/sumup/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: total,
    }),
  });

  const data = await reponse.json();

  alert(JSON.stringify(data, null, 2));
  }
  return (
    <main className="min-h-screen bg-[#FFF9F8] py-12 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          Mon panier
        </h1>

        {panier.length === 0 ? (
          <p className="text-center text-gray-500">
            Votre panier est vide.
          </p>
        ) : (
          panier.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-6 mb-6"
            >
              <h2 className="text-2xl font-bold mb-4">
                🍰 {item.dessert}
              </h2>

            <p className="text-pink-600 font-bold text-xl mb-4">
               {item.prix} €
             </p>
              {item.dessert !== "Tiramisu" &&
               item.dessert !== "Cupcakes" && (
                <p><strong>Base :</strong> {item.base}</p>
              )}
              {item.dessert === "Tiramisu" && (
                <>
                  <p><strong>Parfum :</strong> {item.parfumTiramisu}</p>
                  <p><strong>Fruits :</strong> {item.fruits || "Aucun"}</p>
                  <p><strong>Quantité :</strong> {item.quantiteTiramisu}</p>
                </>
              )}
              {item.dessert === "Cupcakes" && (
                <>
                  <p><strong>Boîte :</strong> {item.tailleCupcakes}</p>
                  <p>
                    <strong>Parfums :</strong>{" "}
                    {item.parfumsCupcakes?.join(", ")}
                  </p>
                 </>
                )}

              {item.dessert !== "Tiramisu" && 
              item.dessert !== "Cupcakes" && (
                 <p>
                   <strong>Fruits :</strong>{" "}
                   {Array.isArray(item.fruits) ? item.fruits.join(", ") : item.fruits}
                </p>
              )}
              
              {item.dessert !== "Tiramisu" && 
              item.dessert !== "Cupcakes" && (
                 <p><strong>Fourrage :</strong> {item.fourrage}</p>
              )}

              {item.dessert !== "Tiramisu" && 
              item.dessert !== "Cupcakes" && (
                <p><strong>Couleur :</strong> {item.couleur}</p>
              )}

              {item.dessert !== "Tiramisu" && 
              item.dessert !== "Cupcakes" && (
                <p><strong>Message :</strong> {item.message}</p>
              )}

              <p><strong>Date :</strong> {item.date}</p>

              <p><strong>Heure :</strong> {item.heure}</p>

              <button
                onClick={() => supprimer(index)}
                className="mt-6 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full"
              >
              🗑️ Supprimer
              </button>
            </div>
          ))
        )}
        <div className="mt-10 bg-white rounded-3xl shadow-md p-6 text-right">
          <p className="text-3xl font-bold text-pink-600">
             Total : {total} €
           </p>
           <button
              onClick={payerAvecSumUp}
              className="mt-6 w-full rounded-full bg-green-600 py-4 text-white font-bold hover:bg-green-700"
            >
              💳 Payer avec SumUp
            </button>
         </div>

      </div>
    </main>
  );
}