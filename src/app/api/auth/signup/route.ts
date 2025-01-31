import { auth } from "@/firebase";
import { authErrorHandler } from "@/modules/auth/utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    await createUserWithEmailAndPassword(auth, email, password);

    return Response.json({
      success: true,
      message: "회원가입 성공!",
    });
  } catch (error) {
    const { errorMessage, statusCode } = authErrorHandler(error);
    return Response.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: statusCode }
    );
  }
}
