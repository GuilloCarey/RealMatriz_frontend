import React from 'react';
import './acerca_juego.module.css';
import NavBar from '../../../common/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

function AcercaDelJuego() {
  const navigate = useNavigate();
  return (
    <div className = "AcercaDelJuego">
      <NavBar />
      <div className="container">
        <h1>Reglas del Juego - DCCombate Místico</h1>
        <p>En DCCombate Místico, dos poderosos reinos se enfrentan en una batalla épica por el control supremo. Puedes unirte a los valientes Defensores de la Luz o a los malvados Seguidores de las Sombras, con el objetivo de defender o destruir el Castillo que guarda el Orbe de la Dominación. El juego se desarrolla en un mapa místico dividido en dos zonas para cada facción, donde desplegarás tus tótems y utilizarás recursos mágicos para ganar la batalla.</p>
        <p>Usa tus runas sabiamente para elegir a tus personajes favoritos. Recuerda que mientras más runas recaudes, más libertad de elección tendrás.</p>
        <div className="buttons">
          <button onClick={() => navigate('/historia')}>Historia</button>
        </div>
      </div>
    </div>
  );
}

export default AcercaDelJuego;
