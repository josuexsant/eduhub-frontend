import { MainLayout } from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <MainLayout>
      <div>
        <h1>Profile</h1>
        <p>This is the profile page</p>
        <button onClick={handleLogout}>Salir</button>
      </div>
    </MainLayout>
  );
};

export default Profile;
