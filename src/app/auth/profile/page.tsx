import Form from "@/components/FormComponent";
import { useState } from "react";

const CreateProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: "이름",
    address: "주소",
    phoneNumber: "전화번호",
  });

  return (
    <Form formData={profileData} handleSubmit={} setFormData={setProfileData} />
  );
};

export default CreateProfilePage;
