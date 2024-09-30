"use client";
import useAuth from "@/hooks/useAuth";

const DashBoard = () => {
  const { user } = useAuth();
  return <div>Welocome {user!.email}</div>;
};

export default DashBoard;
