import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

export const Signin = () => {
  const { isAuthenticated, signin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin();
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);

  return (
    <MainLayout>
      <div >
        <h1>Signin</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo electrónico</label> <hr />
          <input type="email" id="email" name="email" required /> <hr />
          <label htmlFor="password">Contraseña</label> <hr />
          <input type="password" id="password" name="password" required /> <hr />
          <button type="submit">Registrarte</button>
        </form>
      </div>
    </MainLayout>
  );
};

export default Signin;
