import { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const id = sessionStorage.getItem("id");
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
       
        <NavLink to="/" className="text-2xl font-bold text-primary">
          QuickFix
        </NavLink>

        {/* Menu web*/}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <NavLink to="/products" className="hover:text-primary transition hover:text-blue-500">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/register" className="hover:text-primary transition hover:text-blue-500">Registrarse</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="hover:text-primary transition hover:text-blue-500">Iniciar sesión</NavLink>
          </li>
          <li>
            {id}
          </li>
          
        </ul>

        {/* Botón del menú en móviles */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-2xl">&times;</span> // Icono "X"
          ) : (
            <span className="text-2xl">&#9776;</span> // Icono ☰
          )}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md absolute w-full left-0 px-6 py-4 space-y-4">
          <li>
            <NavLink to="/products" className="block text-lg hover:text-primary transition hover:text-blue-500">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/register" className="block text-lg hover:text-primary transition hover:text-blue-500">Registrarse</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="block text-lg hover:text-primary transition hover:text-blue-500">Iniciar sesión</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
