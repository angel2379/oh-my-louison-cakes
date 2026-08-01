export default function MerciPage() {
return (
<main className="min-h-screen flex items-center justify-center bg-[#FFF9F8] px-6">
<div className="bg-white p-10 rounded-3xl shadow-lg text-center max-w-lg">
<h1 className="text-4xl font-bold text-pink-600 mb-6">
🎉 Merci pour votre commande !
</h1>

<p className="text-gray-700 text-lg mb-6">
Votre paiement a bien été reçu.
</p>

<p className="text-gray-600 mb-8">
Nous allons préparer votre création avec amour 💖
</p>

<a
href="/"
className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
>
Retour à l'accueil
</a>
</div>
</main>
);
}