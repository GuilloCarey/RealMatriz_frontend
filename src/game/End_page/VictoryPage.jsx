import React from 'react';
import './VictoryPage.css';
import NavBar from '../../common/NavBar/NavBar';

function VictoryPage() {

    
    return (
    <div className="victory-page">
        <NavBar />
        <h1>¡Victoria!</h1>
        <div className="victory-player">
        <h2>Jugador Victorioso</h2>
        </div>
        <a href="/" className="button-link">Menú Principal</a>
    </div>
    );
}

export default VictoryPage;
