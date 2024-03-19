/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import logoFazenda from '../image/logo.png';
import TransitionsModal from './Modal';

function NavBar() {
  const [abrirModal, setAbrirModal] = useState(false);
  function enviarMensagemWpp() {
    window.open('https://api.whatsapp.com/send/?phone=5547988282047&text=Olá Ivanir, gostaria de informações sobre reservas da fazenda. Vim pelo site!');
  }

  function scrollItem(elemento) {
    const bottomElement = document.getElementById(elemento);
    window.scrollTo({
      top: bottomElement.offsetTop,
      behavior: 'smooth',
    });
  }
  function abrirModalContato() {
    setAbrirModal(true);
  }
  return (
    <div>
      <div className="container w-full md:mx-auto px-4 h-24 flex items-center justify-between flex-col md:flex-row ">
        <div className="font-black">
          <img className="w-28" src={logoFazenda} alt="Retrato de um cavalo com um fundo marrom seguido pelo nome da fazenda" />
        </div>
        <div className="font-black ">
          <ul className="md:ml-auto">
            <li className="flex text-xs mb-3">
              <a
                onClick={enviarMensagemWpp}
                href="#"
                className="ms:text-sm text-xs text-gray-500 hover:text-gray-800 hover:underline mr-4"
              >
                Como reservar
              </a>
              <a
                href="#"
                onClick={() => scrollItem('sobre-nos')}
                className="text-sm text-xs text-gray-500 hover:text-gray-800 hover:underline mr-4"
              >
                Sobre nós
              </a>
              <a
                href="#"
                onClick={() => scrollItem('informacoes')}
                className="text-sm text-xs text-gray-500 hover:text-gray-800 hover:underline mr-4"
              >
                Informações
              </a>
              <a
                onClick={abrirModalContato}
                href="#"
                className="text-sm text-xs text-gray-500 hover:text-gray-800 hover:underline mr-4"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
      <TransitionsModal setAbrirModal={setAbrirModal} abrirModal={abrirModal} enviarMensagemWpp={enviarMensagemWpp} />

    </div>
  );
}

export default NavBar;
