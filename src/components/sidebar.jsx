import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  RefreshCcw,
  Clock,
  DollarSign,
  Home,
  LogOut,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './sidebarcss.css'; 

const Sidebar = ({ expanded, toggleSidebar, activeButton, setActiveButton, handleLogout }) => {
  const navigate = useNavigate();

  const handleNavigate = (route, key) => {
    setActiveButton(key);
    navigate(route);
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-header">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {expanded ? (
            <ChevronLeft size={16} className="chevron-icon" />
          ) : (
            <ChevronRight size={16} className="chevron-icon" />
          )}
        </button>
      </div>

      <div className="sidebar-content">
        <nav className="sidebar-menu">
          <button
            className={`menu-btn ${activeButton === 'home' ? 'active' : ''}`}
            onClick={() => handleNavigate('/', 'home')}
          >
            <Home size={20} className="icon-white" />
            {expanded && <span className="btn-text">Dashboard</span>}
          </button>
          <button
            className={`menu-btn ${activeButton === 'cobrar' ? 'active' : ''}`}
            onClick={() => handleNavigate('/cobrar', 'cobrar')}
          >
            <DollarSign size={20} className="icon-white" />
            {expanded && <span className="btn-text">Cobrar</span>}
          </button>
          <button
            className={`menu-btn ${activeButton === 'recarga' ? 'active' : ''}`}
            onClick={() => handleNavigate('/recarga', 'recarga')}
          >
            <RefreshCcw size={20} className="icon-white" />
            {expanded && <span className="btn-text">Recargar</span>}
          </button>
          <button
            className={`menu-btn ${activeButton === 'historial' ? 'active' : ''}`}
            onClick={() => handleNavigate('/historial', 'historial')}
          >
            <Clock size={20} className="icon-white" />
            {expanded && <span className="btn-text">Historial</span>}
          </button>
        </nav>
      </div>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={20} className="icon-white" />
          {expanded && <span className="logout-text">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
