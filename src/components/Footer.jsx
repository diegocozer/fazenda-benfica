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
      <div className="flex justify-center h-10">
        <p>🍃 Para informações mais detalhadas, entre em contato com a Ivanir. </p>
      </div>
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="">
          <img className="w-12" src={logoFazenda} alt="Retrato de um cavalo com um fundo marrom seguido pelo nome da fazenda" />
        </div>
        <div className="flex items-center space-x-3">
          <p className="text-sm text-gray-500 hover:text-gray-800 hover:underline cursor-pointer flex justify-center items-center" onClick={abrirLocalizacao}>
            Localização:
            <span className="ml-3">
              <FaMapLocation />
            </span>
          </p>
          <FaInstagram className=" hover:text-gray-800 hover:underline cursor-pointer" onClick={() => window.open('https://www.instagram.com/fazendabenficasc/')} />
          <FaFacebookSquare className=" hover:text-gray-800 hover:underline cursor-pointer" onClick={() => window.open('https://www.facebook.com/fazendabenficascbomretiro/')} />
        </div>
      </div>

    </div>
  );
}

export default Footer;
