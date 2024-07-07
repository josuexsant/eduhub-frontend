import { useState } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Asegúrate de que la ruta de importación sea correcta

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, signout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignout = async () => {
    await signout();
    navigate("/"); // Navegar a la página de inicio después de cerrar sesión
  };

  return (
    <nav className="bg-navbar p-4 fixed w-full z-50 block top-0">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-white font-bold">EDUHUB</div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:items-center`}
        >
          <ul className="flex flex-col lg:flex-row lg:ml-auto">
            {isAuthenticated ? (
              <>
                <li className="mt-4 lg:mt-0 lg:ml-4">
                  <Button className="btn-1 navbar-btn">
                    <Link to="/profile" className="w-full h-full block">
                      Perfil
                    </Link>
                  </Button>
                </li>
                <li className="mt-4 lg:mt-0 lg:ml-4">
                  <Button
                    className="btn-2 navbar-btn"
                    handleClick={handleSignout}
                  >
                    Salir
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li className="mt-4 lg:mt-0 lg:ml-4">
                  <Button className="btn-1 navbar-btn">
                    <Link to="/login" className="w-full h-full block">
                      Acceder
                    </Link>
                  </Button>
                </li>
                <li className="mt-4 lg:mt-0 lg:ml-4">
                  <Button className="btn-2 navbar-btn">
                    <Link to="/signin" className="w-full h-full block">
                      Registrarse
                    </Link>
                  </Button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
