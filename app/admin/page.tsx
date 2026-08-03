"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Admin() {
  const [commandes, setCommandes] = useState<any[]>([]);

  useEffect(() => {
    chargerCommandes();
  }, []);

  async function chargerCommandes() {
    const { data } = await supabase
      .from("commandes")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setCommandes(data);
  }

  async function changerStatut(id: number, statut: string) {
    await supabase
      .from("commandes")
      .update({ statut })
      .eq("id", id);

    chargerCommandes();
  }

  async function supprimer(id: number) {
    await supabase
      .from("commandes")
      .delete()
      .eq("id", id);

    chargerCommandes();
  }

  return (
    <main className="min-h-screen bg-pink-50 p-10">

      <h1 className="text-4xl font-bold mb-10">
        👩‍🍳 Administration
      </h1>

      <table className="w-full bg-white rounded-xl shadow">

        <thead className="bg-pink-600 text-white">

          <tr>

            <th className="p-4">Client</th>

            <th>Dessert</th>

            <th>Total</th>

            <th>Retrait</th>

            <th>Statut</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {commandes.map((commande) => (

            <tr
              key={commande.id}
              className="border-b text-center"
            >

              <td className="p-4">
                {commande.nom}
              </td>

              <td>
                {commande.dessert}
              </td>

              <td>
                {commande.prix} €
              </td>

              <td>
                {commande.dateRetrait}
              </td>

              <td>

                <select
                  value={commande.statut}
                  onChange={(e) =>
                    changerStatut(
                      commande.id,
                      e.target.value
                    )
                  }
                  className="border rounded p-2"
                >

                  <option>En attente</option>

                  <option>En préparation</option>

                  <option>Prête</option>

                  <option>Récupérée</option>

                </select>

              </td>

              <td>

                <button
                  onClick={() => supprimer(commande.id)}
                  className="bg-red-500 text-white px-3 py-2 rounded"
                >
                  Supprimer
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </main>
  );
}