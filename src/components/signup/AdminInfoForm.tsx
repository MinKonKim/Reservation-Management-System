import { AdminInfoFormType } from "@/modules/admin/types";
import { Input } from "@/shared/components";
import { SubmitHandler, useForm } from "react-hook-form";

const AdminInfoForm = () => {
  const { register, handleSubmit } = useForm<AdminInfoFormType>();

  const onSubmit: SubmitHandler<AdminInfoFormType> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full m-2">
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
          {...register("companyName")}
          id="companyName"
          label="회사명"
          required
        />
        <Input
          {...register("adminCode")}
          id="adminCode"
          label="사업자 번호"
          required
        />
      </form>
    </div>
  );
};

export default AdminInfoForm;
