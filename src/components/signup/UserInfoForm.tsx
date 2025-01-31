"use client";

import { UserInfoFormType } from "@/modules/user/types";
import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components";
import { SubmitHandler, useForm } from "react-hook-form";

const UserInfoForm = () => {
  // TODO: 유저 정보 입력하는 페이지 작성.

  const { register, handleSubmit } = useForm<UserInfoFormType>();

  const onSubmit: SubmitHandler<UserInfoFormType> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full m-2">
      <h2 className="title-md">유저 정보 입력</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("name")} id="name" label="이름" required />
        <Input
          {...register("phoneNumber")}
          id="name"
          label="전화번호"
          placeholder="ex)010-1234-1234"
          required
        />
        <Input
          {...register("profileImageUrl")}
          id="profileImageUrl"
          label="프로필 이미지"
        />
        {/* 성별 선택: ShadCN Select 컴포넌트 */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">성별</label>
          <Select {...register("gender")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="성별 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">남</SelectItem>
              <SelectItem value="female">여</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </form>
    </div>
  );
};

export default UserInfoForm;
