/* eslint-disable react/jsx-filename-extension */
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import './App.css';
import Acordion from './components/Acordion';
import AccordionInformacoesAdc from './components/AcordionInformacoesAdc';
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
        <Acordion />
        <AccordionInformacoesAdc />
        <Footer />
        <div className="fixed text-green-500 bottom-14 right-1  md:right-32 flex flex-col justify-center items-center">
          <p>Reservas</p>
          <IoLogoWhatsapp className="h-11 w-11" />
        </div>
      </div>
    </div>
  );
}

export default App;
