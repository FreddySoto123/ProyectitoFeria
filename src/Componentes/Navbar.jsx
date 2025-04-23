import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-container">
      <div className="navbar-header">
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <h1 className="navbar-title">Recarga</h1>
        <div className="navbar-user-icon">👤</div>
      </div>

      {isOpen && (
        <div className="sidebar">
          <ul>
            <li>Historial</li>
            <li>Cobrar</li>
            <li>Recargar</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
