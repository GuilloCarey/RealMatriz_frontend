import React from 'react';
import './nosotros.css';
import NavBar from '../../../common/NavBar/NavBar';

function SobreNosotros() {
  return (
    <div className="sobre-nosotros">
      <NavBar />
      <div className="container">
        <h1>Quiénes Somos</h1>
        <div className="members">
          <div className="member">
            <img src="/assets/nosotros/persona1.jpeg" alt="Foto de Santiago" className="member-foto"/>
            <h3>Santiago Prado</h3>
            <p>Ingeniería de Software</p>
          </div>
          <div className="member">
            <img src="/assets/nosotros/persona2.jpeg" alt="Foto de Guillermo" className="member-foto"/>
            <h3>Guillermo Carey</h3>
            <p>Ingeniería Civil Industrial</p>
          </div>
          <div className="member">
            <img src="/assets/nosotros/persona3.jpeg" alt="Foto de Sebastián González" className="member-foto"/>
            <h3>Sebastián González</h3>
            <p>Ingeniería Civil Industrial</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
