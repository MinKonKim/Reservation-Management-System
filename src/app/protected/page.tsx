"use client";

const ProtectedPage = () => {
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(fireAuth, (user) => {
  //     if (!user) {
  //       router.push("/login");
  //     } else {
  //       setUser(user);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [router]);

  // if (!user) {
  //   return <p className="text-center">로딩 중...</p>;
  // }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">환영합니다</h1>
      </div>
    </div>
  );
};

export default ProtectedPage;
