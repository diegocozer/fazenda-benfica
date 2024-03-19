/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-undef */
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
  function enviarMensagemWpp() {
    window.open('https://api.whatsapp.com/send/?phone=5547988282047&text=Olá, gostaria de informações sobre reserva da fazenda. Vim pelo site!');
  }
  return (
    <div className="App text-gray-600 bg-gray-50 h-screen">
      <div className="md:w-5/6 ">
        <NavBar />
        <Banner />
        <Destaque />
        <Fotos />
        <Acordion />
        <AccordionInformacoesAdc />
        <Footer />
        <div
          className="fixed text-green-500 bottom-9 md:bottom-14 right-1  md:right-32 flex flex-col justify-center items-center cursor-pointer"
        onClick={enviarMensagemWpp}
        >
          <IoLogoWhatsapp className="md:h-11 md:w-11 h-8 w-8" />
        </div>
      </div>
    </div>
  );
}

export default App;
