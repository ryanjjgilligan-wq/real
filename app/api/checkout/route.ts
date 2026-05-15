import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // Production: create a Stripe Checkout / Subscription here.
  // This handler simulates a successful authorization so the demo flow
  // completes end-to-end without external keys.
  const ref =
    "LP-" +
    Math.random().toString(36).slice(2, 6).toUpperCase() +
    "-" +
    Date.now().toString(36).slice(-4).toUpperCase();

  return NextResponse.json({
    ok: true,
    ref,
    received: {
      creator: body.creator,
      tier: body.tier,
      price: body.price,
      cadence: body.cadence
    }
  });
}
