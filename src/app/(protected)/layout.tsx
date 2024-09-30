"use client";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";

const RoleLayout = ({ children }: { children: React.ReactNode }) => {
  const { checkAuth, user, loading } = useAuth();

  useEffect(() => {
    checkAuth(true); // true는 인증이 필요함을 의미
  }, [checkAuth]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null; // 로그인 페이지로 리다이렉트되므로 여기서는 아무것도 렌더링하지 않음

  return <>{children}</>;
};

export default RoleLayout;
