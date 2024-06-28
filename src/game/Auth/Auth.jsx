import React, { useState } from 'react';
import axios from 'axios';
//import img1 from '../../../public/assets/view.png';
import './auth.css';
import NavBar from '../../common/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import VITE_BACKEND_URL from '../../config.js';

const img1 = '/assets/view.jpg';


const Auth = () => {
    const [signupData, setSignupData] = useState({
        nombre: '',
        email: '',
        contrasena: ''
    });

    const [loginData, setLoginData] = useState({
        email: '',
        contrasena: ''
    });

    const [loginError, setLoginError] = useState('');
    const [signupSuccess, setSignupSuccess] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            console.log('Signup data:', signupData);
            console.log('VITE_BACKEND_URL:', VITE_BACKEND_URL);
            const response = await axios.post(`${VITE_BACKEND_URL}/auth/signup`, signupData);
            console.log('Signup successful:', response.data);

            const { token, id, nombre, email } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('userId', id);
            localStorage.setItem('userName', nombre);
            localStorage.setItem('userEmail', email);
            
            setSignupSuccess(`Signup successful! User ID: ${response.data.id}`);
            navigate('/comenzarBatalla');

        } catch (error) {
            console.error('Signup error:', error.response.data);
            setLoginError('Error de registro. Ya existe este usuario.');
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(`${VITE_BACKEND_URL}/auth/login`, loginData);
            console.log('Login successful:', response.data);
            
            const { id, nombre, email } = response.data;
            console.log('id:', id);
            console.log('nombre:', nombre);
            console.log('email:', email);
            localStorage.setItem('userId', id);
            localStorage.setItem('userName', nombre);
            localStorage.setItem('userEmail', email);
    
            navigate('/comenzarBatalla');
        } catch (error) {
            console.error('Login error:', error.response.data);
            setLoginError('Error de acceso. Verifica tus credenciales.');
        }
    };
    
    

    const handleSignupChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleTabChange = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const tabElements = document.querySelectorAll('.tab-group .tab');
        tabElements.forEach((tabElement) => {
            tabElement.classList.remove('active');
        });
        e.target.parentElement.classList.add('active');
        const tabContentElements = document.querySelectorAll('.tab-content > div');
        tabContentElements.forEach((tabContentElement) => {
            tabContentElement.style.display = 'none';
        });
        document.querySelector(target).style.display = 'block';
    };

    return (
        <div className="auth-container">
            <NavBar />
            <img src={img1} className="background-image" />
            <div className="auth-form form">
                <ul className="tab-group">
                    <li className="tab active"><a href="#signup" onClick={handleTabChange}>Sign Up</a></li>
                    <li className="tab"><a href="#login" onClick={handleTabChange}>Log In</a></li>
                </ul>
                <div className="tab-content">
                    <div id="signup">
                        <h1>Sign Up for Free</h1>
                        <form onSubmit={handleSignup}>
                            <div className="top-row">
                                <div className="field-wrap">
                                    <input 
                                    type="text"
                                    name="nombre" 
                                    value={signupData.nombre} 
                                    onChange={handleSignupChange} 
                                    required autoComplete="off" 
                                    placeholder="First Name"
                                    />
                                </div>
                                <div className="field-wrap">
                                    <input 
                                    type="email" 
                                    name="email" 
                                    value={signupData.email} 
                                    onChange={handleSignupChange} 
                                    required autoComplete="off" 
                                    placeholder="Email Address"
                                    />
                                </div>
                            </div>
                            <div className="field-wrap">
                                <input 
                                type="password" 
                                name="contrasena" 
                                value={signupData.contrasena} 
                                onChange={handleSignupChange} 
                                required autoComplete="off" 
                                placeholder='Set A Password'
                                />
                            </div>
                            <button type="submit" className="button button-block">Get Started</button>
                            {loginError && <p className="error-message">{loginError}</p>}
                            {signupSuccess && <p className="success-message">{signupSuccess}</p>}
                        </form>
                    </div>
                    <div id="login" style={{ display: 'none' }}>
                        <h1>Welcome Back!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="field-wrap">
                                <input type="email" name="email" value={loginData.email} onChange={handleLoginChange} required autoComplete="off" placeholder='Email'/>
                            </div>
                            <div className="field-wrap">
                                <input type="password" name="contrasena" value={loginData.contrasena} onChange={handleLoginChange} required autoComplete="off" placeholder='Password'/>
                            </div>
                            <p className="forgot"><a href="#">Forgot Password?</a></p>
                            <button type="submit" className="button button-block">Log In</button>
                            {loginError && <p className="error-message">{loginError}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
