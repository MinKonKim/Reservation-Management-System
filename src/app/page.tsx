"use client";
import fireStore from "@/firebase/firestore";
import { addDoc, collection } from "@firebase/firestore";

const Home = () => {
  const onClickUpLoadButton = async () => {
    try {
      await addDoc(collection(fireStore, "users"), {
        email: "test@test.com",
        is_admin: false,
        name: "테스트",
        password: "testtest",
      });
      alert("사용자 정보가 성공적으로 업로드되었습니다.");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("데이터 업로드에 실패했습니다.");
    }
  };
  return (
    <div className="flex h-screen items-center justify-center ">
      <button
        className="p-5 bg-blue-600 rounded-lg"
        onClick={onClickUpLoadButton}
      >
        DB연결확인버튼
      </button>
    </div>
  );
};

export default Home;
