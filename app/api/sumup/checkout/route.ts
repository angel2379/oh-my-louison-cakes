import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { amount } = await req.json();

  const response = await fetch("https://api.sumup.com/v0.1/checkouts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SUMUP_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      checkout_reference: `commande-${Date.now()}`,
      amount,
      currency: "EUR",
      pay_to_email: "ohmylouisoncakes@gmail.com",
      description: "Commande Oh My Louison Cakes",
      merchant_code: "M3M835Q4",
    }),
  });

const data = await response.json();

return NextResponse.json(data);
}