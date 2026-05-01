import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  // Logic: Save to your DB or forward to your nutri.ai-backend
  console.log(`New sign up: ${email}`);

  return NextResponse.json({ 
    message: "Welcome to the future of nutrition!",
    success: true 
  });
}