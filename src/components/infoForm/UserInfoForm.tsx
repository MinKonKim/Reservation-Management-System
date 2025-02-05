"use client";

import { UserInfoFormType } from "@/modules/user/types";
import { Button, Input, InputAvatar } from "@/shared/components";
import SelectField from "@/shared/components/Select/SelectFiled";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const UserInfoForm = () => {
  // TODO: 유저 정보 입력하는 페이지 작성.

  const { control, register, handleSubmit } = useForm<UserInfoFormType>();

  const onSubmit: SubmitHandler<UserInfoFormType> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full m-2">
      <h2 className="title-md">유저 정보 입력</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="profileImageUrl"
          control={control}
          render={({ field }) => <InputAvatar {...field} />}
        />
        <Input {...register("name")} id="name" label="이름" required />
        <Input
          {...register("phoneNumber")}
          id="name"
          label="전화번호"
          placeholder="ex)010-1234-1234"
          required
        />
        <SelectField<UserInfoFormType>
          name="gender"
          control={control}
          label="성별"
          placeholder="성별 선택"
          options={[
            { value: "male", label: "남" },
            { value: "female", label: "여" },
          ]}
        />
        <Button type="submit" className="mt-5" color="point" isFull>
          가입하기
        </Button>
      </form>
    </div>
  );
};

export default UserInfoForm;
