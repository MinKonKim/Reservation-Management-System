import { useUser } from "@/hooks/useUser";

const UserProfile: React.FC = () => {
  const { user, loading } = useUser();

  if (loading) return <p>Loading...</p>;

  if (!user) return <p>No user logged in.</p>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Email: {user.email}</p>
      <p>UID: {user.uid}</p>
    </div>
  );
};

export default UserProfile;
