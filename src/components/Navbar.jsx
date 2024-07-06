import { useState } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <li className="mt-4 lg:mt-0 lg:ml-4">
              <Button className="btn-1 navbar-btn">
                <Link to="/login">Acceder</Link>
              </Button>
            </li>
            <li className="mt-4 lg:mt-0 lg:ml-4">
              <Button className="btn-2 navbar-btn">
                <Link to="/signing">Registrarse</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
