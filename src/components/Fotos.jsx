import React from 'react';
import alianca from '../image/alianca.jpg';
import casamento from '../image/casamento.webp';
import danca from '../image/danca-gaucha.webp';
import mesa from '../image/mesa-jantar.jpg';

function Fotos() {
  return (
    <div className="mt-10 px-10 " id="sobre-nos">
      <div className="container mx-auto px-4" />
      <div>
        <h3 className="text-2xl text-center text-gray-500 font-semibold mb-8 text-gray-400 font-bold" data-aos="zoom-in">
          Conheça mais a fazenda
        </h3>
        <div className="grid grid-cols-4 grid-rows-2 gap-2 md:gap-6">
          <div className="relative col-span-2 row-span-2 rounded-lg overflow-hidden" data-aos="zoom-in">
            <div className="gradient-container absolute bottom-0 pl-4 pb-4">
              <p className=" text-white font-bold -mb-3">
                Texto
              </p>
            </div>
            <img className="w-full h-full object-cover" src={casamento} alt="Foto do Resort Salinas Maragogi" />
          </div>
          <div className="relative col-span-2 rounded-lg overflow-hidden" data-aos="zoom-in">
            <div className="gradient-container absolute bottom-0 pl-4 pb-4">
              <p className=" text-white font-bold -mb-3">
                Texto
              </p>
            </div>
            <img className="w-full h-full object-cover " src={danca} alt="Foto do Resort Salinas Maragogi" />
          </div>
          <div className="relative rounded-lg overflow-hidden" data-aos="zoom-in">
            <div className="gradient-container absolute bottom-0 pl-4 pb-4">
              <p className=" text-white font-bold -mb-3">
                Texto
              </p>
            </div>
            <img className="w-full h-full object-cover " src={alianca} alt="Foto do Resort Salinas Maragogi" />
          </div>
          <div className="relative rounded-lg overflow-hidden" data-aos="zoom-in">
            <div className="gradient-container absolute bottom-0 pl-4 pb-4 ">
              <p className=" text-white font-bold -mb-3">
                Texto
              </p>
            </div>
            <img className="w-full h-full object-cover rounded-lg overflow-hidden" src={mesa} alt="Foto do Resort Salinas Maragogi" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotos;
