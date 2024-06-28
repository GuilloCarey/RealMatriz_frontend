import React, { useState, useEffect } from 'react';
import './Cartas.css';
import Carta from './Carta';

function Cartas({ onTotemSelect, resetSelection, cartaConfigs, bando, isUserTurn }) {
  const [lastClickedId, setLastClickedId] = useState(null);

  const handleCardClick = (id) => {
    if (!isUserTurn) {
      return; // No hacer nada si no es el turno del usuario
    }
    setLastClickedId(id);
    onTotemSelect({ id });
  };

  useEffect(() => {
    if (resetSelection && lastClickedId !== null) {
      setLastClickedId(null);
    }
  }, [resetSelection, lastClickedId]);

  return (
    <div className="cartas">
      {cartaConfigs.map(config => (
        <Carta
          key={config.id}
          {...config}
          isLastClicked={config.id === lastClickedId}
          onClick={() => handleCardClick(config.id)}
          bando={bando} 
        />
      ))}
    </div>
  );
}

export default Cartas;
