import { SocialLoginButtons } from "@/components/signin";
import { Input } from "@/shared/components";
import { SubmitHandler, useForm } from "react-hook-form";

type SigninFormType = {
  email: string;
  password: string;
};

const SigninPage = () => {
  const { register, handleSubmit } = useForm<SigninFormType>();

  const onSubmit: SubmitHandler<SigninFormType> = (data) => {
    console.log(data);
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
