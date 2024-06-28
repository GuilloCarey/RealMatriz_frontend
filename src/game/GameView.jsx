import React, { useEffect, useState, useCallback } from 'react';
import InfoPartida from './InfoPartida/InfoPartida';
import Tablero from './Tablero/Tablero';
import './GameView.css';
import Recursos from './Recursos/Recursos';
import Tablero_Recursos from './Tablero_Recursos/Tablero_Recursos';
import NavBar from '../common/NavBar/NavBar';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import VITE_BACKEND_URL from '../config';

function GameView() {
  const navigate = useNavigate();
  const { partidaId } = useParams();
  const [infoPartidaContent, setInfoPartidaContent] = useState([]);
  const [logJugadasContent, setLogJugadasContent] = useState([]);
  const [selectedTotem, setSelectedTotem] = useState(null);
  const [resetSelection, setResetSelection] = useState(false);
  const [tablero, setTablero] = useState(Array(10).fill().map(() => Array(21).fill(0)));
  const [cartaConfigs, setCartaConfigs] = useState([
    { id: 1, isClickable: true, isSmall: false },
    { id: 2, isClickable: true, isSmall: false },
    { id: 3, isClickable: false, isSmall: true },
    { id: 4, isClickable: false, isSmall: true },
  ]);

  const [runas, setRunas] = useState({
    runas_usuario_1: 0,
    runas_usuario_2: 0
  });

  const usuarioId = parseInt(localStorage.getItem('userId'));
  const [errorMessage, setErrorMessage] = useState('');
  const [bando, setBando] = useState('');
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [usuarioId1, setUsuarioId1] = useState(null);
  const [usuarioId2, setUsuarioId2] = useState(null);

  useEffect(() => {
    axios.get(`${VITE_BACKEND_URL}/gameplay/data/${partidaId}`)
      .then((response) => {
        console.log('Partida data:', response.data);
        if (response.data.estado === 'sombra_gano' ) {
          if (bando === 'Defensores de la Luz') {
            navigate('/defeat');
          } else {
            navigate('/victory');
          }
        } else if (response.data.estado === 'luz_gano') {
          if (bando === 'Defensores de la Luz') {
            navigate('/victory');
          }
          else {
            navigate('/defeat');
          }
        }
        setInfoPartidaContent([response.data]);
        const logs = response.data.logs_batalla || [];
        setLogJugadasContent([logs]);

        setTablero(JSON.parse(response.data.matriz));
        setRunas({
          runas_usuario_1: response.data.runas_usuario_1,
          runas_usuario_2: response.data.runas_usuario_2
        });

        setUsuarioId1(response.data.usuario_id_1);
        setUsuarioId2(response.data.usuario_id_2);

        if (response.data.usuario_id_1 === usuarioId) {
          setBando(response.data.bando_usuario_1);
        } else {
          setBando(response.data.bando_usuario_2);
        }
        setIsUserTurn(response.data.usuario_turno_actual === usuarioId);
      })
      .catch((error) => {
        console.error('Error fetching partida data:', error);
      });
  }, [partidaId, usuarioId, navigate, bando]);

  const handleTotemSelection = (totem) => {
    if (isUserTurn) {
      setSelectedTotem(totem);
    }
  };

  const handleBoardClick = (x, y) => {
    if (isUserTurn && selectedTotem && usuarioId !== null) {
  
      const payload = {
        x,
        y,
        totemId: selectedTotem.id,
        usuarioId: usuarioId,
        bando: bando,
        partidaId: partidaId
      };
  
  
      axios.post(`${VITE_BACKEND_URL}/gameplay/update`, payload)
        .then((response) => {
          setTablero(JSON.parse(response.data.matriz));
          setSelectedTotem(null);
          setResetSelection(true);
          rotateCards(selectedTotem.id);
          setRunas(response.data.runas);
          setErrorMessage('');
        })
        .catch((error) => {
          console.error('Error updating tablero:', error);
          if (error.response && error.response.data && error.response.data.error) {
            setErrorMessage(error.response.data.error);
          }
        });
    }
  };

  const rotateCards = useCallback((id) => {
    const newConfigs = [...cartaConfigs];
    const index = newConfigs.findIndex(carta => carta.id === id);

    if (index === 0) {
      const firstCard = newConfigs.splice(0, 1)[0];
      const thirdCard = newConfigs.splice(1, 1)[0];
      newConfigs.splice(0, 0, thirdCard);
      newConfigs.push(firstCard);
    } else if (index === 1) {
      const secondCard = newConfigs.splice(1, 1)[0];
      newConfigs.push(secondCard);
    }

    newConfigs[0].isClickable = true;
    newConfigs[0].isSmall = false;
    newConfigs[1].isClickable = true;
    newConfigs[1].isSmall = false;

    newConfigs[2].isClickable = false;
    newConfigs[2].isSmall = true;
    newConfigs[3].isClickable = false;
    newConfigs[3].isSmall = true;

    setCartaConfigs(newConfigs);
  }, [cartaConfigs]);

  const resetSelectionHandler = useCallback(() => {
    setResetSelection(false);
  }, []);

  return (
    <div className="game-view">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="fila-superior">
        <Tablero_Recursos tipo={1} />
        <div className="tablero-container">
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <Tablero 
            tablero={tablero} 
            onBoardClick={handleBoardClick}
            bando={bando}
          />
        </div>
        <Tablero_Recursos tipo={2} />
      </div>
      <div className="fila-inferior">
        {infoPartidaContent.map((partida, index) => (
          <InfoPartida key={index} title={`Info de Partida ${index + 1}`} content={partida} />
        ))}
        <Recursos 
          onTotemSelect={handleTotemSelection} 
          resetSelection={resetSelection} 
          runas={runas}
          cartaConfigs={cartaConfigs}
          bando={bando} 
          isUserTurn={isUserTurn}
          usuarioId1={usuarioId1}
          usuarioId2={usuarioId2}
        />
        {logJugadasContent.map((logs, index) => (
          <InfoPartida key={index} title={`Log de Jugadas ${index + 1}`} content={logs} />
        ))}
      </div>
    </div>
  );
}

export default GameView;
