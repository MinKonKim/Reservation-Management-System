// const useLogin = () => {
//   const queryClient = useQueryClient();

//   return useMutation(
//     async ({ email, password }: LoginCredentials) => {
//       const { data } = await apiClient.post("/auth/login", { email, password });
//       if (!data.success) throw new Error(data.message);
//       return data;
//     },
//     {
//       onSuccess: (data) => {
//         localStorage.setItem("token", data.data.token);
//         queryClient.invalidateQueries(["user"]); // 🔹 로그인 후 사용자 정보 자동 리페칭
//       },
//       onError: (error: unknown) => {
//         alert(error instanceof Error ? error.message : "로그인 실패");
//       },
//     }
//   );
// };
