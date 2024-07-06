
import { Button } from "../components/Button";

export const Login = () => {

  const handleSubmit = (e) => {
    console.log(e.target.email.value)
  }

  return (
    <>
      <h2>Comencemos esta INCREIBLE aventura</h2>
      <h3>Proyectos para tu futuro profesional</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electronico</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" />
        <Button type="submit">Iniciar Sesión</Button> 
      </form>
    </>
  );
};

export default Login;
