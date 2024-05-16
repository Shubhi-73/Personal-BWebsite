import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activities';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Hero />
    <Activities/>
  </React.StrictMode>
);

