export type ApiResponse<T = void> = {
  success: boolean;
  message: string;
  data?: T;
};

export type PromiseApiResponse<T = void> = Promise<ApiResponse<T>>;
