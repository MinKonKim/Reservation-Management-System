import { googleSignup } from "@/modules/auth/services/gooleSignup";
import { serverClient } from "@/shared/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const supabase = await serverClient();
  const { origin } = new URL(req.url);

  const response = await googleSignup(origin, supabase);
  return NextResponse.json(response);
};
