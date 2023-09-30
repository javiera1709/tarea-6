import React from 'react';

function Nav() {
  return (
    <nav className="nav">
      <a href="/index.html">Inicio</a>
      <div className="submenu">
        <a href="#">Nosotros</a>
        <div className="submenu-content">
          <a href="/integrantes/boreas.html">Boreas</a>
          <a href="/integrantes/javiera.html">Javiera</a>
          <a href="/integrantes/emilio.html">Emilio</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
