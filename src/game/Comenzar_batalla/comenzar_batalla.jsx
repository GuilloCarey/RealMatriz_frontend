import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./comenzar_batalla.css";
import NavBar from "../../common/NavBar/NavBar";
import VITE_BACKEND_URL from "../../config";

function ComenzarBatalla() {
    const [partidas, setPartidas] = useState([]);
    const [partidasPendientes, setPartidasPendientes] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [partidaActiva, setPartidaActiva] = useState(false); 
    const navigate = useNavigate();
    const usuarioId = localStorage.getItem('userId');

    useEffect(() => {
        if (!usuarioId) {
            console.error('Usuario no logeado');
            navigate('/auth');
            return;
        }

        const usuarioIdNumber = parseInt(usuarioId, 10);

        axios.get(`${VITE_BACKEND_URL}/gameplay/data`)
            .then((response) => {
                console.log('Partidas en curso:', response.data);
                const userPartidas = response.data.filter(partida => partida.usuario_id_1 === usuarioIdNumber || partida.usuario_id_2 === usuarioIdNumber);
                setPartidas(userPartidas);
                setPartidasPendientes(response.data.filter(
                    partida => partida.estado === 'pendiente' && partida.usuario_id_1 !== usuarioIdNumber && partida.usuario_id_2 !== usuarioIdNumber
                ));
                const activePartida = userPartidas.find(partida => partida.estado !== 'finalizado');
                setPartidaActiva(activePartida);
            })
            .catch((error) => {
                console.error('Error fetching partidas data:', error);
            });
    }, [navigate, usuarioId]);

    const handlePartidaClick = async (partida) => {
        if (partidaActiva && partidaActiva.id !== partida.id){
            setErrorMessage('Ya tienes una partida activa');
            return;
        }
        const usuarioIdNumber = parseInt(usuarioId, 10);

        if (!usuarioId) {
            console.error('Usuario no logeado');
            navigate('/auth');
            return;
        }

        // Si la partida está pendiente y el usuario es el creador
        if (partida.estado === 'pendiente' && partida.usuario_id_1 === usuarioIdNumber) {
            setErrorMessage('Esperando rival');
            return;
        }

        // Si la partida está pendiente y el usuario no es el creador
        if (partidasPendientes.some(p => p.id === partida.id)) {
            try {
                await axios.post(`${VITE_BACKEND_URL}/gameplay/join`, {
                    partidaId: partida.id,
                    usuarioId: usuarioId
                });
                navigate(`/gameview/${partida.id}`);
            } catch (error) {
                console.error('Error al unirse a la partida:', error.response ? error.response.data : error.message);
            }
        } else {
            // Continuar con una partida existente
            if (partida.usuario_turno_actual !== usuarioIdNumber) {
                setErrorMessage('No es tu turno');
                return;
            }
            navigate(`/gameview/${partida.id}`);
        }
    };

    const comenzarNuevaPartida = () => {
        if (!partidaActiva) {
            navigate('/new');
        } else {
            setErrorMessage('Ya tienes una partida activa');
        }
    };

    return (
        <>
            <NavBar />
            <div className="comenzar-boton"> 
                <button onClick={comenzarNuevaPartida}>Comenzar nueva partida</button>
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="partidas-container">
                <div className="tus-partidas">
                    <h2>Tus Partidas:</h2>
                    <ul>
                        {partidas.map(partida => (
                            <li key={partida.id}>
                                <button 
                                    onClick={() => handlePartidaClick(partida)} 
                                    className={`partida-boton ${partida.usuario_turno_actual !== parseInt(usuarioId) ? 'no-turno' : 'tu-turno'} ${partida.usuario_turno_actual === null ? 'esperando-rival' : ''}`}>
                                    Partida {partida.id}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="unirte-partidas">
                    <h2>Unirte a Partidas:</h2>
                    <ul>
                        {partidasPendientes.map(partida => (
                            <li key={partida.id}>
                                <button onClick={() => handlePartidaClick(partida)} className="partida-boton">
                                    Partida {partida.id}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ComenzarBatalla;
