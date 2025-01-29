"use client";

import { Button } from "@/shared/components";
import { useRoleStore } from "@/stores";
import { useRouter } from "next/router";

const RoleSelection = () => {
  const { setRole } = useRoleStore();
  const router = useRouter();

  const handleSelectRole = (role: "user" | "admin") => {
    setRole(role);
    router.push("/auth/signup"); // 회원가입 페이지로 이동
  };

  return (
    <div className="flex gap-4">
      <Button onClick={() => handleSelectRole("user")}>사용자</Button>
      <Button onClick={() => handleSelectRole("admin")}>어드민</Button>
    </div>
  );
};
export default RoleSelection;
