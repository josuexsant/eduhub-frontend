import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const { signin, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Correo electrónico</label> <hr />
      <input type="email" id="email" name="email" required />
      <hr />
      <label htmlFor="password">Contraseña</label>
      <hr />
      <input type="password" id="password" name="password" required /> <hr />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;
