import React, { useState } from 'react';
import { User, DollarSign, RefreshCcw, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar'; 
import './dashboard.css';

const Dashboard = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [activeButton, setActiveButton] = useState('home');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleNavigation = (route, buttonKey) => {
    setActiveButton(buttonKey);
    navigate(route);
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
          <div className="welcome-box">
            <h2 className="welcome-title">Bienvenido, Admin</h2>
            <p className="welcome-text">Seleccione una opción para comenzar.</p>
          </div>

          <div className="cards-grid">
            <div
              className={`card ${activeButton === 'cobrar' ? 'card-active' : ''}`}
              onClick={() => handleNavigation('/cobrar', 'cobrar')}
            >
              <div className="card-content">
                <div className="card-icon">
                  <DollarSign size={24} className="icon-yellow" />
                </div>
                <div>
                  <h3 className="card-title">Cobrar</h3>
                  <p className="card-description">Gestionar cobros</p>
                </div>
              </div>
            </div>

            <div
              className={`card ${activeButton === 'recarga' ? 'card-active' : ''}`}
              onClick={() => handleNavigation('/recarga', 'recarga')}
            >
              <div className="card-content">
                <div className="card-icon">
                  <RefreshCcw size={24} className="icon-yellow" />
                </div>
                <div>
                  <h3 className="card-title">Recargar</h3>
                  <p className="card-description">Realizar recargas</p>
                </div>
              </div>
            </div>

            <div
              className={`card ${activeButton === 'historial' ? 'card-active' : ''}`}
              onClick={() => handleNavigation('/historial', 'historial')}
            >
              <div className="card-content">
                <div className="card-icon">
                  <Clock size={24} className="icon-yellow" />
                </div>
                <div>
                  <h3 className="card-title">Historial</h3>
                  <p className="card-description">Ver transacciones</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="footer-text">
            © 2025 Admin System. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
