import React, { useEffect, useState } from 'react';
import './perfil.css';
import NavBar from '../../common/NavBar/NavBar';

const Perfil = () => {
    const [userData, setUserData] = useState({
        id: '',
        nombre: '',
        email: ''
    });

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        const userName = localStorage.getItem('userName');
        const userEmail = localStorage.getItem('userEmail');

        setUserData({
            id: userId,
            nombre: userName,
            email: userEmail
        });
    }, []);

    return (
        <>
            <NavBar />
            <div className="perfil-container">
                <h1 className="perfil-title">Perfil</h1>
                <div className="perfil-card" style={{ margin: '0 auto' }}>
                    <h2 className="perfil-subtitle">Información del usuario</h2>
                    <ul className="perfil-list">
                        <li><strong>ID:</strong> {userData.id}</li>
                        <li><strong>Nombre:</strong> {userData.nombre}</li>
                        <li><strong>Correo electrónico:</strong> {userData.email}</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Perfil;
