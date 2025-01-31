import dynamic from "next/dynamic";
const AdminInfoForm = dynamic(
  () => import("@/components/signup/AdminInfoForm")
);
const UserInfoForm = dynamic(() => import("@/components/signup/UserInfoForm"));

const InfoFormPage = async ({ params }: { params: { role: string } }) => {
  const role = (await params).role;
  if (role !== "user" && role !== "admin") {
    //TODO : 잘못된 접근시, UX 적인 측면 고려
    return <p>잘못된 접근입니다.</p>;
  }
  return <div>{role === "admin" ? <AdminInfoForm /> : <UserInfoForm />}</div>;
};

export default InfoFormPage;
