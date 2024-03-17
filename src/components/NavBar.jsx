import React from 'react';
import logoFazenda from '../image/logo.png';

function NavBar() {
  return (
    <div>
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <div className="font-black">
          <img className="w-28" src={logoFazenda} alt="Retrato de um cavalo com um fundo marrom seguido pelo nome da fazenda" />

        </div>
        <div className="font-black">
          <ul className="ml-auto">
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-800 hover:underline mr-4"
              >
                Como reservar
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-800 hover:underline mr-4"
              >
                Sobre nós
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-800 hover:underline mr-4"
              >
                Informações
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-800 hover:underline mr-4"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
