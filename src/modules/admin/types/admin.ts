import { Database } from "@/shared/types";

type AdminTable = Database["public"]["Tables"]["admins"];

export type AdminInfoType = AdminTable["Row"];
export type InsertAdminType = AdminTable["Insert"];
