import React from 'react';
import capelaMontada from '../image/fazenda-foto.png';

function Destaque() {
  return (
    <div className="md:h-96 sm:h-auto ">
      <div className="md:container py-10 mx-auto px-4">
        <div className="md:flex">
          <div className="md:pr-10 md:w-2/4 mb-11">
            <div className="md:text-sm test-gray-400 font-medium mt-2 sm:w-full">
              <p>Fazenda benfica</p>
              <p>Localizada na cidade de bom retiro</p>
            </div>
            <div>
              <p className="sm:text-xs text-sm test-gray-400 font-medium mt-4">
                Em meio às majestosas paisagens do sul do Brasil, nossa fazenda oferece um cenário excepcional para casamentos e eventos especiais.
                Com vastos campos verdejantes, cercados por montanhas imponentes e
                florestas exuberantes, cada canto da nossa propriedade é uma tela em branco, pronta para ser transformada de acordo com sua visão.

              </p>
              <p className="text-sm test-gray-400 font-medium mt-4">
                Seja uma cerimônia íntima ao ar livre sob o brilho do sol ou uma festa animada sob o manto estrelado da noite,
                a Fazenda Benfica proporciona o ambiente perfeito para todos os tipos de celebrações. Nossa equipe dedicada está aqui para tornar seus sonhos realidade,
                cuidando de cada detalhe para que seu dia seja verdadeiramente memorável.
              </p>
            </div>
          </div>
          <div className="md:w-2/4 m-auto flex justify-center">
            <img className="w-3/4 rounded" data-aos="zoom-in" src={capelaMontada} alt="Foto do Resort Salinas Maragogi" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destaque;
