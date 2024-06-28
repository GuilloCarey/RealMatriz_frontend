import React from 'react';
import './landing_page.module.css';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landingPage">
      <header>
        <nav>
          <ul>
            <li><a href="/ranking">Ranking</a></li>
            <li><a href="/historial">Historial</a></li>
            <li><a href="/acerca_juego">Acerca del Juego</a></li>
            <li><a href="/perfil">Perfil</a></li>
            <li><a href="/sobre_nosotros">Sobre Nosotros</a></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <button className="battleButton" onClick={() => navigate('/comenzaBatalla')}>
          Comenzar batalla
        </button>
      </main>
    </div>
  );
}

export default LandingPage;
