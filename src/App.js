/* eslint-disable react/jsx-filename-extension */
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import './App.css';
import Banner from './components/Banner';
import Destaque from './components/Destaque';
import Footer from './components/Footer';
import Fotos from './components/Fotos';
import NavBar from './components/NavBar';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App text-gray-600 bg-gray-50 h-screen">
      <div className="w-5/6">
        <NavBar />
        <Banner />
        <Destaque />
        <Fotos />
        <Footer />
      </div>
    </div>
  );
}

export default App;
