import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex flex-col gap-1 h-full justify-center items-center m-6">
      <Link
        href="/sign_up/user"
        className="w-full flex justify-center items-center bg-Prime-400 rounded-lg h-[33vh] font-bold text-5xl text-white hover:bg-Prime-500"
      >
        일반 사용자
      </Link>
      <Link
        href="/sign_up/admin"
        className="w-full flex justify-center items-center bg-Point-400 rounded-lg h-[33vh] font-bold text-5xl text-white hover:bg-Point-500"
      >
        어드민
      </Link>
    </div>
  );
};

export default SignUpPage;
