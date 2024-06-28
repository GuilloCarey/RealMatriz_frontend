import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../common/App";
import GameView from "../game/GameView";
import Auth from "../game/Auth/Auth";
import ComenzarBatalla from "../game/Comenzar_batalla/comenzar_batalla";
import NuevaPartida from "../game/Comenzar_batalla/NuevaPartida/nueva_partida";
import VictoryPage from "../game/End_page/VictoryPage";
import DefeatPage from "../game/End_page/DefeatPage";
import LandingPage from "../game/Landing_page/landing_page";
import AcercaDelJuego from "../game/Landing_page/Acerca del juego/acerca_juego";
import Historial from "../game/Landing_page/Historial/historial";
import Ranking from "../game/Landing_page/Ranking/ranking";
import Historia from "../game/Landing_page/Acerca del juego/historia"
import Perfil from "../game/Perfil/Perfil";
import SobreNosotros from "../game/Landing_page/Acerca del juego/nosotros";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/gameview/:partidaId" element={<GameView />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/comenzarBatalla" element={<ComenzarBatalla />} />
          <Route path="/new" element={<NuevaPartida />} />
          <Route path="/victory" element={<VictoryPage />} />
          <Route path="/defeat" element={<DefeatPage />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/acerca-juego" element={<AcercaDelJuego />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/landing_page" element={<LandingPage />} />
          <Route path="/sobre_nosotros" element={<SobreNosotros />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
