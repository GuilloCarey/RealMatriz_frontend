import React, { useState, useEffect } from "react";
import axios from "axios";
import "./nueva_partida.css";
import NavBar from "../../../common/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import VITE_BACKEND_URL from "../../../config";

function NuevaPartida() {
  const [equipo, setEquipo] = useState(""); // Estado para almacenar el equipo seleccionado
  const [userId, setUserId] = useState(null); // Estado para almacenar el userId
  const estado = "pendiente";
  const [errorMessage, setErrorMessage] = useState(""); // Estado para almacenar el mensaje de error
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar el ID del usuario del almacenamiento local
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setErrorMessage('Debes estar logeado para jugar');
    }
  }, []);

  const handleSelectChange = (e) => {
    setEquipo(e.target.value);
  };

  const getEquipoNombre = (value) => {
    switch (value) {
      case "defensores":
        return "Defensores de la Luz";
      case "seguidores":
        return "Seguidores de las Sombras";
      default:
        return "Defensores de la Luz";
    }
  };

  const handleBuscarRival = async () => {
    if (!userId) {
      setErrorMessage('Debes estar logeado para jugar');
      return;
    }

    try {
      const response = await axios.post(`${VITE_BACKEND_URL}/partida`, {
        equipo: getEquipoNombre(equipo),
        userId,
        estado
      });
      navigate("/comenzarBatalla");
    } catch (error) {
      console.error('Error al crear la partida:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <NavBar />

    <div className="container">
      
      <h1 className="title">Nueva partida</h1>
      <p className="subtitle">
        ¡Aquí podrás comenzar una nueva partida!
      </p>
      <div className="options">
        <div className="option">
          <p className="option-title">Elige tu equipo:</p>
          <select className="select" value={equipo} onChange={handleSelectChange}>
            <option value="defensores">Defensores de la Luz</option>
            <option value="seguidores">Seguidores de las Sombras</option>
          </select>
        </div>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button className="buscar-button" onClick={handleBuscarRival}>
        Buscar rival
      </button>
    </div>
    </div>
  );
}

export default NuevaPartida;
