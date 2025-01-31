export type User = {
  userId: string;
  name: string;
  email: string;
  phoneNumber?: string;
  profileImageUrl?: string;
  gender?: "male" | "female" | "other";
  preferredSpace?: string;
  membershipType?: "basic" | "premium" | "vip";
  // marketingConsent: boolean;
  signupDate?: Date;
  role: "user";
};

export type UserInfoFormType = Pick<
  User,
  "name" | "phoneNumber" | "profileImageUrl" | "gender"
>;
