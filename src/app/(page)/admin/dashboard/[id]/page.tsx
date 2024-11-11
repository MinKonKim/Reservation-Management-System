"use client";
import CalenderWidget from "@/components/(WidgetComponents)/CalenderWidget";
import ProductsWidget from "@/components/(WidgetComponents)/ProductsWidget";
import ReservationWidget from "@/components/(WidgetComponents)/ReservationWidget";
import WidgetContainer from "@/components/(WidgetComponents)/WidgetContainer";
import useUserStore from "@/stores/userStore";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AdminDashBoard = () => {
  const { id } = useParams();
  const { user } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    // 어드민이 아니면 접근 불가.
    if (!user.is_admin) {
      router.push("/user/dashboard");
    }

    console.log(id);
  }, [user, router]);

  return (
    <div className="p-5 bg-Prime-400 h-screen">
      <h1 className="text-2xl font-bold mb-4">어드민 대시보드</h1>
      <WidgetContainer>
        <CalenderWidget />
        <ReservationWidget />
        <ProductsWidget />
      </WidgetContainer>
    </div>
  );
};

export default AdminDashBoard;
