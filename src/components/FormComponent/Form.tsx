import { FormType } from "@/types/FormType";
import { useEffect, useRef } from "react";
import Button from "../ButtonComponent";
import InputFeild from "./InputField";

interface FormProps {
  handleSubmit: () => void;
  formData: FormType;
  setFormData: React.Dispatch<React.SetStateAction<FormType>>;
}

const Form = ({ handleSubmit, formData, setFormData }: FormProps) => {
  const errorRef = useRef<string | null>("");

  useEffect(() => {
    console.log(formData);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    // name이 formData의 키로 존재하는지 확인
    if (name in formData) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">회원가입</h2>
      {Object.keys(formData).map((key) => (
        <InputFeild
          key={key}
          label={key}
          name={key} // name도 key로 설정하여 handleChange에서 구분
          type={formData[key] as string} // 기본적으로 type을 "text"로 설정 (필요시 다르게 설정 가능)
          value={formData[key] as string} // value는 data 객체에서 가져옴
          onChange={handleChange}
        />
      ))}
      <Button onClick={handleSubmit} isFull>
        제출
      </Button>

      {errorRef.current && (
        <p className="text-red-500 mt-4 text-center">{errorRef.current}</p>
      )}
    </div>
  );
};

export default Form;
