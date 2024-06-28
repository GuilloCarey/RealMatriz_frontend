import React from 'react';
import './acerca_juego.module.css';
import NavBar from '../../../common/NavBar/NavBar';

function Historia() {
  return (
    <div className="acerca-del-juego">
      <NavBar />
      <div className="container">
        <h2>Historia</h2>
        <h1>La Guerra de los Reinos Místicos</h1>
        <p>En un mundo lleno de magia y misterio, existen múltiples reinos habitados por criaturas místicas como dragones, elfos, duendes, hadas y otras bestias legendarias. Durante siglos, estos reinos han coexistido en relativa paz, cada uno protegiendo sus fronteras y preservando sus tradiciones ancestrales.</p>
        <p>Sin embargo, todo cambió cuando un antiguo artefacto mágico, conocido como el "Orbe de la Dominación", fue descubierto por una facción ambiciosa. Este orbe otorgaba un poder inmenso sobre la magia misma, permitiendo al que lo poseyera controlar a las criaturas místicas y dominar los reinos a su antojo.</p>
        <p>La lucha por el control del Orbe de la Dominación desató una guerra devastadora entre los diferentes reinos místicos. Las facciones se enfrentaron en batallas épicas, desplegando sus poderosas criaturas y utilizando toda clase de hechizos y estrategias para obtener la ventaja sobre sus enemigos.</p>
        <p>En medio del caos y la destrucción, los reinos se dividieron en dos facciones principales: los Defensores de la Luz, que buscan proteger la magia, preservar la paz en el mundo místico y que poseen ya hace varios años en un castillo la Orbe de la dominación, y los Seguidores de las Sombras, que ansían obtener el poder del Orbe para imponer su voluntad sobre todos los reinos.</p>
      </div>
    </div>
  );
}

export default Historia;
