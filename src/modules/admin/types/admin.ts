export type Admin = {
  userId: string;
  name: string;
  email: string;
  phoneNumber?: string;
  profileImageUrl?: string;
  companyName?: string;
  adminCode?: string;
  // adminRole: "super-admin" | "manager" | "staff";
  managedSpaces: string[]; // 공간 ID 리스트
  signupDate: Date;
  role: "admin";
};

export type AdminInfoFormType = Pick<
  Admin,
  "name" | "phoneNumber" | "companyName" | "adminCode"
>;
