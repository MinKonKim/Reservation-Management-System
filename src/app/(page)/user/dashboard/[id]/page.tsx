"use client";

import { useParams } from "next/navigation";

const UserDashBoard = () => {
  const { id } = useParams();

  return <div>아이디 : {id}</div>;
};

export default UserDashBoard;
