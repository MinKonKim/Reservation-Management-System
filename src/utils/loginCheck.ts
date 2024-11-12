import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
export const loginCheck = (router: AppRouterInstance) => {
  const storedUser = localStorage.getItem("user-storage");
  if (storedUser) {
    const userState = JSON.parse(storedUser);
    const { state } = userState;
    if (state?.user?.id) {
      if (state.user.is_admin) {
        router.push(`/admin/dashboard/${state.user.id}`);
      } else {
        router.push(`/user/dashboard/${state.user.id}`);
      }
    }
  } else {
    console.log("유저 정보 없음");
    router.push("/auth/login");
  }
};
