/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import logoFazenda from '../image/logo.png';

function Footer() {
  function abrirLocalizacao() {
    window.open('https://maps.app.goo.gl/PzhEG44PE8m65y4i7');
  }
  return (
    <div className="border-t border-gray-200 mt-6">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="">
          <img className="w-12" src={logoFazenda} alt="Retrato de um cavalo com um fundo marrom seguido pelo nome da fazenda" />
          <div className="flex justify-center items-center mt-5">
            <FaMapLocation />
            <p className="ml-2 text-sm text-gray-500 hover:text-gray-800 hover:underline cursor-pointer" onClick={abrirLocalizacao}>Localização</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaInstagram />
          <FaFacebookSquare />
        </div>

      </div>

    </div>
  );
}

export default Footer;
