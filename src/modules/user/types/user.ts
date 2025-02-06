import { Database } from "@/shared/types";

type UsersTable = Database["public"]["Tables"]["users"];

export type UserInfoType = UsersTable["Row"];

export type InsertUserType = UsersTable["Insert"];

export type UpdateUserType = UsersTable["Update"];
