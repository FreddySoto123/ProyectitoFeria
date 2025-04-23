import React, { useState } from 'react';
import {  ChevronLeft, ChevronRight, RefreshCcw, Clock, DollarSign, Home, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [activeButton, setActiveButton] = useState('home');

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); 
    navigate('/'); 
  };

  return (
    <div className="dashboard">
    {/* Sidebar */}
    <div className={`sidebar ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-header">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarExpanded ? (
          <ChevronLeft size={16} className="chevron-icon" />
        ) : (
          <ChevronRight size={16} className="chevron-icon" />
        )}
      </button>
      </div>

      {/* Sidebar Menu */}
      <div className="sidebar-content">
        <nav className="sidebar-menu">
       
          <button
            className={`menu-btn ${activeButton === 'home' ? 'active' : ''}`}
            onClick={() => setActiveButton('home')}
          >
            <Home size={20} className="icon-white" />
            {sidebarExpanded && <span className="btn-text">Dashboard</span>}
          </button>
          <button
            className={`menu-btn ${activeButton === 'cobrar' ? 'active' : ''}`}
            onClick={() => setActiveButton('cobrar')}
          >
            <DollarSign size={20} className="icon-white" />
            {sidebarExpanded && <span className="btn-text">Cobrar</span>}
          </button>
          <button
            className={`menu-btn ${activeButton === 'recargar' ? 'active' : ''}`}
            onClick={() => setActiveButton('recargar')}
          >
            <RefreshCcw size={20} className="icon-white" />
            {sidebarExpanded && <span className="btn-text">Recargar</span>}
          </button>
          <button
            className={`menu-btn ${activeButton === 'historial' ? 'active' : ''}`}
            onClick={() => setActiveButton('historial')}
          >
            <Clock size={20} className="icon-white" />
            {sidebarExpanded && <span className="btn-text">Historial</span>}
          </button>
        </nav>
      </div>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
      <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={20} className="icon-white" />
            {sidebarExpanded && <span className="logout-text">Logout</span>}
          </button>
      </div>
    </div>

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
        <div className="welcome-box">
          <h2 className="welcome-title">Bienvenido, Admin</h2>
          <p className="welcome-text">Seleccione una opción para comenzar.</p>
        </div>

        <div className="cards-grid">
          <div
            className={`card ${activeButton === 'cobrar' ? 'card-active' : ''}`}
            onClick={() => setActiveButton('cobrar')}
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
            className={`card ${activeButton === 'recargar' ? 'card-active' : ''}`}
            onClick={() => setActiveButton('recargar')}
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
            onClick={() => setActiveButton('historial')}
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
