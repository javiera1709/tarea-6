import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom para la navegación sin recarga de página

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to="/">Inicio</Link>
      <div className="submenu">
        <a href="#">Nosotros</a>
        <div className="submenu-content">
          <Link to="./integrantes/Boreas">Boreas</Link>
          <Link to="./integrantes/Javiera">Javiera</Link>
          <Link to="./integrantes/Emilio">Emilio</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
