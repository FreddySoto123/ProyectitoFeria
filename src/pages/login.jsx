import React, { useState } from 'react';
import { Mail, Lock, Eye, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 
import './login.css';
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();


  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    navigate('/dashboard'); 

      console.log('Usuario autenticado');
    } catch (err) {
      console.error(err);
      setError('Correo o contraseña inválidos');
    }
  };

  return (
    <div className="login-container">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <div className="logo-container">
            <div className="logo-circle">
              <User size={20} className="logo-icon" />
            </div>
            <h1 className="site-title">Sistema</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="form-container">
          <div className="welcome-section">
            <h2 className="welcome-title">Inicio de Sesión</h2>
            <p className="welcome-subtitle">Ingresa los datos de acceso</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <div className="input-wrapper">
                <div className="input-icon"><Mail size={18} /></div>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="ejemplo@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <div className="input-wrapper">
                <div className="input-icon"><Lock size={18} /></div>
                <input
                  id="password"
                  type={passwordVisible ? 'text' : 'password'}
                  className="form-input password-input"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePassword}
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>

            {error && <p className="error-text">{error}</p>}

            <div>
              <button type="submit" className="submit-button">
                <span className="button-text">Ingresar</span>
                <ArrowRight size={18} className="button-icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
