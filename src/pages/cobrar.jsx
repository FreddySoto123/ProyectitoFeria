import React, { useState } from 'react';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import './cobrar.css';

const Cobrar = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [producto, setProducto] = useState('');
  const [monto, setMonto] = useState('');
const [activeButton, setActiveButton] = useState('home');
  
  

  
  
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Producto: ${producto}, Monto: ${monto}`);
    alert('Cobro realizado');
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

      {/* Main Content */}
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
            <h2 className="form-title">Realizar Cobro</h2>
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="producto">Producto:</label>
              <input
                type="text"
                id="producto"
                value={producto}
                onChange={(e) => setProducto(e.target.value)}
                required
              />

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
                Cobrar
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cobrar;
