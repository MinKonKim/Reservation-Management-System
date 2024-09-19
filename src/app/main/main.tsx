import { addDoc, collection } from "firebase/firestore/lite";
import React, { useState } from "react";
import fireStore from "../../firebase/firestore";

const main = () => {
  const [value, setValue] = useState();

  const onClickUpLoadButton = async () => {
    await addDoc(collection(fireStore, `users`), {
      value,
    });
  };

  return (
    <div>
      <button onClick={onClickUpLoadButton}>Ada Lovelace 등록</button>
    </div>
  );
};

export default main;
