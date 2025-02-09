export type SignupFormType = {
  email: string;
  password: string;
  passwordCheck: string;
};

export type SignupResponse = {
  success: boolean;
  userId?: string;
  status?: number;
  url?: string;
};

export type SigninResponse = {
  userId?: string;
  token?: string;
  status?: number;
};
