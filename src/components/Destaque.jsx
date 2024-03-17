import React from 'react';
import capelaMontada from '../image/fazenda-foto.png';

function Destaque() {
  return (
    <div className="h-96 ">

      <div className="container py-10 mx-auto px-4">
        <div className="flex">

          <div className="pr-10 w-2/4">
            <div className="text-2xl">Fazenda benfica</div>
            <div className="text-sm test-gray-400 font-medium mt-2">Localizada na cidade de bom retiro</div>
            <div>
              <p className="text-sm test-gray-400 font-medium mt-4">
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
          <div className="w-2/4 m-auto flex justify-center">
            <img className="w-3/4 rounded" data-aos="zoom-in" src={capelaMontada} alt="Foto do Resort Salinas Maragogi" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destaque;
