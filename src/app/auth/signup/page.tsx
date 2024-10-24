import Button from "@/components/ButtonComponent";
import Input from "@/components/InputComponent";
import { auth, db } from "@/firebase/firebase";
import { handleError } from "@/utils/errorHandler";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Firestore에 사용자 정보 저장
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        isAdmin: false, // 기본적으로 일반 사용자로 설정
      });

      router.push("/user/profile");
    } catch (error: unknown) {
      setError(handleError(error));
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <Button type="submit">회원가입</Button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
