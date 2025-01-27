import { SocialLoginButtons } from "@/components/signin";
import { signin } from "@/modules/auth/services";
import { Input } from "@/shared/components";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type SigninFormType = {
  email: string;
  password: string;
};

const SigninPage = () => {
  const { register, handleSubmit } = useForm<SigninFormType>();
  const router = useRouter();
  const onSubmit: SubmitHandler<SigninFormType> = async (data) => {
    const { email, password } = data;
    const response = await signin(email, password);
    if (response.success) {
      alert(response.message);
      router.push("/");
    }
  };

  return (
    <div className="w-full mx-2 mb-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          label="이메일"
          placeholder="이메일을 입력해주세요."
        />
        <Input
          {...register("password")}
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </form>
      <SocialLoginButtons />
    </div>
  );
};

export default SigninPage;
