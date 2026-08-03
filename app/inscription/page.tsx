"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabase";
export default function Inscription() {
const [nom, setNom] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
async function creerCompte() {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nom,
      },
    },
  });

  if (error) {
    alert(error.message);
  } else {
    alert(
      "Compte créé avec succès ! Vérifiez votre boîte e-mail pour confirmer votre compte."
    );
  }
}
  return (
    <main className="min-h-screen bg-[#FFF8F7] flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#3F6663] mb-2">
          Bienvenue 💖
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Créez votre compte Oh My Louison Cakes
        </p>

        <input
  type="text"
  placeholder="Nom"
  value={nom}
  onChange={(e) => setNom(e.target.value)}
  className="w-full border rounded-xl p-3 mb-4"
/>

        <input
  type="email"
  placeholder="Adresse e-mail"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full border rounded-xl p-3 mb-4"
/>

        <input
  type="password"
  placeholder="Mot de passe"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full border rounded-xl p-3 mb-6"
/>

        <button
          onClick={creerCompte}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-xl py-3 font-bold transition"
        >
          Créer mon compte
        </button>
      </div>
    </main>
  );
}