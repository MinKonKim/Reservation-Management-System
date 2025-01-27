import { Button, Input } from "@/shared/components";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignupFormType } from "./signup.type";

interface SignupFormProps {
  onSubmit: SubmitHandler<SignupFormType>;
}

const SignupForm = ({ onSubmit }: SignupFormProps) => {
  const { register, handleSubmit } = useForm<SignupFormType>();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-2 mb-4">
      <Input
        {...register("email")}
        id="email"
        label="이메일"
        placeholder="이메일를 입력해주세요.ex)abcd@example.com"
        required
      />
      <Input
        {...register("password")}
        label="비밀번호"
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        required
      />
      <Input
        {...register("passwordCheck")}
        label="비밀번호 확인"
        id="passworCheck"
        placeholder="위와 동일하게 입력해주세요."
        type="password"
        required
      />
      <Button type="submit" color="point" isFull>
        회원가입 하기
      </Button>
    </form>
  );
};

export default SignupForm;
