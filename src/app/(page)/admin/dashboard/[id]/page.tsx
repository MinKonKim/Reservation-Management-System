"use client";
import { useParams } from "next/navigation";

const AdminDashBoard = () => {
  const { id } = useParams();

  return <div>아이디 :{id}</div>;
};

export default AdminDashBoard;
