import React from 'react';
import './InfoPartida.css';

function InfoPartida({ title, content }) {
  return (
    <div className="info-partida">
      <div className="info-partida-content">
        <h2>{title}</h2>
        {Array.isArray(content) ? (
          <ul>
            {content.map((log, index) => (
              <li key={index}>{log}</li>
            ))}
          </ul>
        ) : (
          <pre>{JSON.stringify(content, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

export default InfoPartida;
