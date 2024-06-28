import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className='App'>
        <NavBar />
        <div className="content">
          <p>
            <button className="mainButton" onClick={() => navigate('/auth')}>
              Comenzar batalla
            </button>
          </p>
          <div className="buttonContainer">
            <button className="optionButton" onClick={() => navigate('/ranking')}>
              Ranking
            </button>
            <button className="optionButton" onClick={() => navigate('/historial')}>
              Historial
            </button>
            <button className="optionButton" onClick={() => navigate('/acerca-juego')}>
              Acerca del Juego
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
