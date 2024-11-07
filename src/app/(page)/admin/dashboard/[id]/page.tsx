"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const AdminDashBoard = () => {
  const { id } = useParams();

  useEffect(() => {}, []);
  return <div>아이디 :{id}</div>;
};

export default AdminDashBoard;
