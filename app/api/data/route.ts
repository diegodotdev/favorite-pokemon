import { NextResponse } from "next/server";
import { supabase } from "@/lib/utils";

export async function GET() {
  try {
    const data = await supabase.from("pokemon").select("*");
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
