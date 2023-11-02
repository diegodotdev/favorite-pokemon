import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
  const id = params?.id;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result = await response.json();
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
