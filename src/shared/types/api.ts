export type ApiResponse = {
  success: boolean;
  message: string;
  data?: {
    id: string;
  };
};

export type Result = {
  success: boolean;
  message: string;
};
