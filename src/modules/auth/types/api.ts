export type SignupFormType = {
  email: string;
  password: string;
  passwordCheck: string;
};

export type SignupResponse = {
  userId?: string;
  status?: number;
};

export type SigninResponse = {
  userId?: string;
  token?: string;
  status?: number;
};
