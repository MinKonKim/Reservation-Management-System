import { signin } from "@/modules/auth/services";
import { serverClient } from "@/shared/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const supabase = await serverClient();
  const { email, password } = await req.json(); // 요청 데이터 파싱
  const response = await signin(email, password, supabase);

  return NextResponse.json(response);
};
