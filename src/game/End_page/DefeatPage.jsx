import React from 'react';
import './DefeatPage.css';
import NavBar from '../../common/NavBar/NavBar';

function DefeatPage() {
  return (
    <div className="defeat-page">
      <NavBar />
      <h1>Derrota</h1>
      <div className="defeat-player">
        <h2>Jugador Derrotado</h2>
      </div>
      <a href="/" className="button-link">Menú Principal</a>
    </div>
  );
}

export default DefeatPage;
