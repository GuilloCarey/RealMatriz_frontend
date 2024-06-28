import React from 'react';
import './Tablero.css';

//import img1 from '../../assets/personajes/1_luz.jpg';
//import img2 from '../../assets/personajes/2_luz.jpg';
//import img3 from '../../assets/personajes/3_luz.jpg';
//import img4 from '../../assets/personajes/4_luz.jpg';
//import img5 from '../../assets/personajes/1_sombra.jpg';
//import img6 from '../../assets/personajes/2_sombra.jpg';
//import img7 from '../../assets/personajes/3_sombra.jpg';
//import img8 from '../../assets/personajes/4_sombra.jpg';

const img1 = '/assets/personajes/1_luz.jpg';
const img2 = '/assets/personajes/2_luz.jpg';
const img3 = '/assets/personajes/3_luz.jpg';
const img4 = '/assets/personajes/4_luz.jpg';
const img5 = '/assets/personajes/1_sombra.jpg';
const img6 = '/assets/personajes/2_sombra.jpg';
const img7 = '/assets/personajes/3_sombra.jpg';
const img8 = '/assets/personajes/4_sombra.jpg';

const imageMap = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
};

function Tablero({ tablero, onBoardClick, bando }) {
  const handleCellClick = (x, y) => {
    if (onBoardClick) {
      console.log(`Celda (${x}, ${y}) clickeada`);
      onBoardClick(x, y);
    }
  };

  return (
    <div className="tablero">
      {tablero.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => {
            const [totemId] = cell.toString().split('-');
            return (
              <div
                key={cellIndex}
                className="cell"
                onClick={() => handleCellClick(rowIndex, cellIndex)}
              >
                {totemId !== '0' && (
                  <img src={imageMap[totemId]} alt={`Totem ${totemId}`} className="totem" />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Tablero;
