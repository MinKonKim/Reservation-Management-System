import { auth } from "@/firebase";
import { authErrorHandler } from "@/modules/auth/utils";
import { createUserWithEmailAndPassword } from "firebase/auth";

// type ResponseData = {
//   success: boolean;
//   message: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   if (req.method !== "POST") {
//     res
//       .status(405)
//       .send({ success: false, message: "이 API는 POST 메서드만 지원합니다." });
//   }
//   try {
//     const { email, password } = await req.body;
//     await createUserWithEmailAndPassword(auth, email, password);

//     res.status(201).send({ success: true, message: "회원가입 성공!" });
//   } catch (error) {
//     const { errorMessage, statusCode } = authErrorHandler(error);
//     res.status(statusCode).send({ success: false, message: errorMessage });
//   }
// }

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
