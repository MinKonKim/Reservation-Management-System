import { Button } from "@/shared/components";
import Link from "next/link";

const SelectRoles = () => {
  return (
    <div>
      <Link href={"/auth/signup/user"}>
        <Button>사용자</Button>
      </Link>
      <Link href={"/auth/signup/admin"}>
        <Button>어드민</Button>
      </Link>
    </div>
  );
};

export default SelectRoles;
