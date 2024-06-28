import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from "./Recursos.module.css";
import Cartas from "../Cartas/Cartas";
import { useNavigate, useParams } from 'react-router-dom';
import VITE_BACKEND_URL from "../../config";

function Recursos({ onTotemSelect, resetSelection, runas, cartaConfigs, bando, isUserTurn, usuarioId1, usuarioId2 }) {
  const [recursos, setRecursos] = useState(0);
  const navigate = useNavigate();
  const { partidaId } = useParams(); 
  const usuarioId = parseInt(localStorage.getItem('userId'));

  useEffect(() => {
    if (usuarioId === usuarioId1) {
      setRecursos(runas.runas_usuario_1);
    } else if (usuarioId === usuarioId2) {
      setRecursos(runas.runas_usuario_2);
    }
  }, [runas, bando, usuarioId, usuarioId1, usuarioId2]);



  const handleSiguienteTurno = () => {
    if (!isUserTurn) {
      return; // No hacer nada si no es el turno del usuario
    }
    const usuarioId = parseInt(localStorage.getItem('userId'));
    if (!usuarioId) {
      console.error('Usuario no logeado');
      navigate('/auth');
      return;
    }

    axios.post(`${VITE_BACKEND_URL}/gameplay/next-turn`, { usuarioId, partidaId }) 
      .then((response) => {
        if (response.data.estado === 'sombra_gano' ) {
          if (bando === 'Defensores de la Luz') {
            navigate('/defeat');
          } else {
            navigate('/victory');
          }
        } else if (response.data.estado === 'luz_gano') {
          if (bando === 'Defensores de la Luz') {
            navigate('/victory');
          } else {
            navigate('/defeat');
          }
        } else {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error('Error al actualizar el turno:', error);
      });
  }
  

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        {recursos}
      </div>
      <div className={styles.cartas}>
        <Cartas onTotemSelect={onTotemSelect} resetSelection={resetSelection} cartaConfigs={cartaConfigs} bando={bando} isUserTurn={isUserTurn} />
      </div>
      <div className={styles.boton}>
        <button onClick={handleSiguienteTurno}>Siguiente turno</button>
      </div>
    </div>
  );
}

export default Recursos;
