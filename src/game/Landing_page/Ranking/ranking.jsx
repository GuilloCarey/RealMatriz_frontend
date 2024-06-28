import React from 'react';
import './ranking.module.css';
import NavBar from '../../../common/NavBar/NavBar';

function Ranking() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>Próximamente podrás ver el ranking de DCCombate Místico</h1>
        <table>
          <thead>
            <tr>
              <th>Posición</th>
              <th>Jugador</th>
              <th>Puntaje</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>LuzValiente123</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>OscuridadMax</td>
              <td>4870</td>
            </tr>
            <tr>
              <td>3</td>
              <td>GuerreroLuminoso</td>
              <td>4750</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ranking;
