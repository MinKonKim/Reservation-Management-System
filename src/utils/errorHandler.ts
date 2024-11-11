import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = (error?: any, message?: string, code?: number) => {
  return NextResponse.json(
    { message: message || error.message, code: code || error.code },
    { status: 400 }
  );
};
