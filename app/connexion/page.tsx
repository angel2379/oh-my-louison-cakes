export default function Connexion() {
  return (
    <main className="min-h-screen bg-[#FFF8F7] flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#3F6663] mb-2">
          Bon retour 👋
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Connectez-vous à votre compte Oh My Louison Cakes
        </p>

        <input
          type="email"
          placeholder="Adresse e-mail"
          className="w-full border rounded-xl p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full border rounded-xl p-3 mb-2"
        />

        <div className="text-right mb-6">
          <a href="#" className="text-pink-500 text-sm">
            Mot de passe oublié ?
          </a>
        </div>

        <button className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-xl py-3 font-bold transition">
          Se connecter
        </button>
      </div>
    </main>
  );
}