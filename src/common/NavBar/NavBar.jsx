import React from 'react';
import './NavBar.css';
//import img1 from '../../../public/assets/Logo.png';
import { useNavigate } from 'react-router-dom';
const img1 = '/assets/Logo.png';


function NavBar() {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    navigate(e.target.value);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={img1} alt="Logo" />
      </div>
      <div className="navbar-title">
        DCCombate Místico
      </div>
      <div className="navbar-menu">
        <select onChange={handleNavigation}>
          <option value="/"></option>
          <option value="/ranking">Ranking</option>
          <option value="/historial">Historial</option>
          <option value="/acerca-juego">Acerca del Juego</option>
          <option value="/comenzarBatalla">Comenzar Batalla</option>
          <option value="/perfil">Perfil</option>
          <option value="/">Menú</option>
        </select>
      </div>
    </div>
  );
}

export default NavBar;
