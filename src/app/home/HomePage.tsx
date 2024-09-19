import React from "react";
import fireStore from "../../firebase/firestore";
import { addDoc, collection } from "@firebase/firestore";

const HomePage = () => {
  const onClickUpLoadButton = async () => {
    await addDoc(collection(fireStore, `users`), {});
  };

  return (
    <div>
      <button onClick={onClickUpLoadButton}>Ada Lovelace 등록</button>
    </div>
  );
};

export default HomePage;
