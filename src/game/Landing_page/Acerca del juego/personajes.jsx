import React, { useState } from 'react';
import './personajes.css';
import characterData from './characterData'; // Asume que tienes un archivo de datos de personajes

function Personajes() {
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  const nextCharacter = () => {
    setCurrentCharacterIndex((currentCharacterIndex + 1) % characterData.length);
  };

  const currentCharacter = characterData[currentCharacterIndex];

  return (
    <div className="personajes-page">
      <header>
        <nav>
          <ul>
            <li className="back-button"><a href="/">Volver al menú</a></li>
            <div className="nav-center">
              <li><a href="/ranking">Ranking</a></li>
              <li><a href="/historial">Historial</a></li>
              <li><a href="/acerca-juego">Acerca del Juego</a></li>
            </div>
          </ul>
        </nav>
      </header>
      <h1>Personajes</h1>
      <div className="container">
        <div className="character-display">
          <img id="characterImage" src={currentCharacter.image} alt={currentCharacter.name} />
          <div className="character-info">
            <h1 id="characterName">{currentCharacter.name}</h1>
            <h2 id="characterSide">{currentCharacter.side}</h2>
            <p id="characterDescription">{currentCharacter.description}</p>
            <button onClick={nextCharacter}>Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personajes;

