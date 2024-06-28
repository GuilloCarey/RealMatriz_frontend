import React from 'react';
import './Carta.css';

//import img1_luz from '../../../public/assets/personajes/1_luz.jpg';
//import img2_luz from '../../../public/assets/personajes/2_luz.jpg';
//import img3_luz from '../../../public/assets/personajes/3_luz.jpg';
//import img4_luz from '../../../public/assets/personajes/4_luz.jpg';
//import img1_sombra from '../../../public/assets/personajes/1_sombra.jpg';
//import img2_sombra from '../../../public/assets/personajes/2_sombra.jpg';
//import img3_sombra from '../../../public/assets/personajes/3_sombra.jpg';
//import img4_sombra from '../../../public/assets/personajes/4_sombra.jpg';

const img1_luz = '/assets/personajes/1_luz.jpg';
const img2_luz = '/assets/personajes/2_luz.jpg';
const img3_luz = '/assets/personajes/3_luz.jpg';
const img4_luz = '/assets/personajes/4_luz.jpg';
const img1_sombra = '/assets/personajes/1_sombra.jpg';
const img2_sombra = '/assets/personajes/2_sombra.jpg';
const img3_sombra = '/assets/personajes/3_sombra.jpg';
const img4_sombra = '/assets/personajes/4_sombra.jpg';

function Carta({ id, isClickable, isSmall, isLastClicked, onClick, bando }) {
  const imageMap = bando === 'Defensores de la Luz' ? {
    1: img1_luz,
    2: img2_luz,
    3: img3_luz,
    4: img4_luz,
  } : {
    1: img1_sombra,
    2: img2_sombra,
    3: img3_sombra,
    4: img4_sombra,
  };

  const imageUrl = imageMap[id] || img1_luz;

  return (
    <div
      className={`carta ${isSmall ? 'small' : ''} ${isClickable ? 'clickable' : ''} ${isLastClicked ? 'last-clicked' : ''}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={isClickable ? onClick : null}
    >
    </div>
  );
}

export default Carta;
