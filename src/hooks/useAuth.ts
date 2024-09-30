import { auth } from "@/firebase/fireauth";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const checkAuth = (requiredAuth: boolean = false) => {
    if (loading) return;

    if (requiredAuth && !user) {
      // 인증이 필요한 페이지인데 사용자가 로그인하지 않은 경우
      router.push("/login");
    } else if (!requiredAuth && user) {
      // 인증이 필요하지 않은 페이지인데 사용자가 이미 로그인한 경우
      router.push("/dashboard");
    }
  };

  return { user, loading, checkAuth };
};

export default useAuth;
