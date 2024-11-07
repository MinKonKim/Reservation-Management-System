"use client";
import CalenderWidget from "@/components/(WidgetComponents)/CalenderWidget";
import ReservationWidget from "@/components/(WidgetComponents)/ReservationWidget";
import WidgetContainer from "@/components/(WidgetComponents)/WidgetContainer";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const AdminDashBoard = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <div className="p-5 bg-Prime-400 h-screen">
      <h1 className="text-2xl font-bold mb-4">어드민 대시보드</h1>
      <WidgetContainer>
        <CalenderWidget />
        <ReservationWidget />
      </WidgetContainer>
    </div>
  );
};

export default AdminDashBoard;
