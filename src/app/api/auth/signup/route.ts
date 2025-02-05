import { signup } from "@/modules/auth/services";
import { serverClient } from "@/shared/utils/supabase";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (req: NextRequest) => {
  const supabase = await serverClient();
  const { email, password } = await req.json();

  const response = await signup(email, password, supabase);
  return NextResponse.json(response);
};
