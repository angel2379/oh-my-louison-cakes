import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
try {
const {
clientEmail,
clientNom,
total,
commande,
} = await request.json();

const data = await resend.emails.send({
from: "Oh My Louison Cakes <onboarding@resend.dev>",
to: [clientEmail],
subject: "Confirmation de votre commande 🍰",
html: `
<h2>Merci ${clientNom} ❤️</h2>

<p>Nous avons bien reçu votre commande.</p>

<p><strong>Total :</strong> ${total} €</p>

<p>${commande}</p>

<br>

<p>A très bientôt !</p>

<h3>Oh My Louison Cakes</h3>
`,
});

return NextResponse.json(data);

} catch (error) {
return NextResponse.json(error, { status: 500 });
}

}