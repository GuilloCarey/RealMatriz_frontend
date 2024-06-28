import React from 'react';
import './historial.css';
import NavBar from '../../../common/NavBar/NavBar';

function Historial() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>Historial de Partidas</h1>
        <table>
          <thead>
            <tr>
              <th>Contrincante</th>
              <th>Resultado</th>
              <th>Puntos Ganados</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SombraOscura</td>
              <td>Victoria</td>
              <td>+30</td>
            </tr>
            <tr>
              <td>GuerreroLuz</td>
              <td>Derrota</td>
              <td>-15</td>
            </tr>
            <tr>
              <td>MagoBlanco</td>
              <td>Victoria</td>
              <td>+25</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Historial;
