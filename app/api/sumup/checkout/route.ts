import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { amount } = await req.json();

console.log("API KEY =", process.env.SUMUP_API_KEY);
  const response = await fetch("https://api.sumup.com/v0.1/checkouts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SUMUP_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
checkout_reference: crypto.randomUUID(),
      amount,
      currency: "EUR",
      pay_to_email: "ohmylouisoncakes@gmail.com",
      description: "Commande Oh My Louison Cakes",
      merchant_code: "M3M835Q4",
      redirect_url: "https://oh-my-louison-cakes.vercel.app/merci",
      return_url: "https://oh-my-louison-cakes.vercel.app/merci",
      hosted_checkout: {
        enabled: true,
      },
    }),
  });

const data = await response.json();

return NextResponse.json({
  apiKeyExiste: !!process.env.SUMUP_API_KEY,
  longueurCle: process.env.SUMUP_API_KEY?.length,
  data,
});
}