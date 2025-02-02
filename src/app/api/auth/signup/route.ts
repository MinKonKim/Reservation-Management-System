import { signup } from "@/modules/auth/services";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();
  const response = await signup(email, password);
  return NextResponse.json(response);
};
