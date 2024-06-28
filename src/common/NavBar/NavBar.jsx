import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
const img1 = '/assets/Logo.png';

function NavBar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={() => handleNavigation('/')}>
        <img src={img1} alt="Logo" />
      </div>
      <div className="navbar-title">
        DCCombate Místico
      </div>
      <div className="navbar-buttons">
        <div className="dropdown">
          <button className="dropbtn">|||</button>
          <div className="dropdown-content">
            <a onClick={() => handleNavigation('/comenzarBatalla')}>Comenzar Batalla</a>
            <a onClick={() => handleNavigation('/ranking')}>Ranking</a>
            <a onClick={() => handleNavigation('/historial')}>Historial</a>
            <a onClick={() => handleNavigation('/acerca-juego')}>Acerca del Juego</a>
            <a onClick={() => handleNavigation('/perfil')}>Perfil</a>
            <a onClick={() => handleNavigation('/sobre_nosotros')}>Sobre Nosotros</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
