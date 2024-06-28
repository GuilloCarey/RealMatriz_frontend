import React from 'react';
import './landing_page.module.css';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="LangingPage">
      <header>
        <nav>
          <ul>
            <li><a href="/ranking">Ranking</a></li>
            <li><a href="/historial">Historial</a></li>
            <li><a href="/acerca_juego">Acerca del Juego</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <button onClick={() => navigate('/comenzaBatalla')}>
          Comenzar batalla
        </button>
      </main>
    </div>
  );
}

export default LandingPage;