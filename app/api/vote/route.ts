import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/lib/utils";

export async function POST(req: NextRequest, { params }: any) {
  const body = await req.json();

  try {
    await supabase.from("pokemon").insert(body);
    return NextResponse.json(
      { message: "Thank you for voting" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
