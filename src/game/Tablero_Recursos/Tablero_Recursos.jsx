import React from 'react';
import './Tablero_Recursos.css';
//import imagenLuz from '../../assets/Tablero_Recursos_Luz.png';
//import imagenSombra from '../../assets/Tablero_Recursos_Sombra.png'; 

const imagenLuz = '/assets/Tablero_Recursos_Luz.png';
const imagenSombra = '/assets/Tablero_Recursos_Sombra.png';


function Tablero_Recursos({ tipo }) {
  const gridItems = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
  }));

  const handleClick = (id) => {
    console.log(`Clicked item ${id}, tipo ${tipo}`);
    // Logica para manejar el click
  };

  const imagenSrc = tipo === 1 ? imagenLuz : imagenSombra;

  return (
    <div className="tablero-recursos">
      <div className="imagen-superior">
        <img src={imagenSrc} alt="Imagen superior" />
        <div className="grilla">
          {gridItems.map(item => (
            <div
              key={item.id}
              className="grilla-item"
              onClick={() => handleClick(item.id)}
            >
              <div className="grilla-item-content"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tablero_Recursos;
