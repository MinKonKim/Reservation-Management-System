import Input from "@/components/InputComponent";
interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
// 키-레이블 매핑 객체
const LABELS: { [key: string]: string } = {
  email: "이메일",
  password: "비밀번호",
  confirmPassword: "비밀번호 확인",
  name: "이름",
  address: "주소",
  phoneNumber: "전화번호",
  isAdmin: "어드민 여부",
};

const PLACEHOLDER: { [key: string]: string } = {
  email: "ex) asdf@gmail.com",
  password: "소문자, 대문자, 특수기호 !@#$",
};

const InputFeild = ({
  label,
  type,
  name,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{LABELS[label] || label}</label>
      <Input
        type={type}
        name={name}
        placeholder={PLACEHOLDER[name] || LABELS[name] || name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
  );
};

export default InputFeild;
