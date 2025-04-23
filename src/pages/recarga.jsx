import React, { useState } from 'react';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './recarga.css';
import Sidebar from '../components/sidebar';

const Recarga = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [producto, setProducto] = useState('');
  const [monto, setMonto] = useState('');
  const [activeButton, setActiveButton] = useState('home');

  // Datos de usuario (puedes luego obtenerlos desde una API, localStorage, etc.)
  const nombre = 'Natalia Andrea Lozano Mostajo';
  const codigo = 'A27812-2';
  const saldo = 120.50;

  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Producto: ${producto}, Monto: ${monto}`);
    alert('Recarga realizada');
    setProducto('');
    setMonto('');
  };

  return (
    <div className="dashboard">
      <Sidebar
        expanded={sidebarExpanded}
        toggleSidebar={toggleSidebar}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        handleLogout={handleLogout}
      />

      <div className="main-content">
        <header className="header">
          <div className="header-left">
            <h1 className="header-title">Sistema Card & Go</h1>
          </div>
          <div className="header-right">
            <div className="user-avatar">
              <User size={20} />
            </div>
          </div>
        </header>

        <main className="main-area">
          <div className="form-container">
            <h2 className="form-title">Realizar Recarga</h2>
            <div className="user-info-card">
            <label htmlFor="datos">Datos de la tarjeta:</label>
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>Código:</strong> {codigo}</p>
            <p><strong>Saldo actual:</strong> Bs. {saldo.toFixed(2)}</p>
          </div>
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="monto">Monto:</label>
              <input
                type="number"
                step="0.01"
                id="monto"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
                required
              />
              <button type="submit" className="submit-btn">
                Recargar
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Recarga;
