import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import * as React from 'react';

export default function AccordionUsage() {
  return (
    <div className="mt-10 mx-6" data-aos="zoom-in" id="informacoes">
      <div>
        <h3 className="text-2xl text-center text-gray-500 font-semibold mb-8 text-gray-400 font-bold">
          Saiba mais sobre nossa estrutura
        </h3>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className="font-semibold">
            Salão de festas
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-disc text-left ml-4">
            <li>Capacidade disponível para 136 pessoas sentadas (Pode aumentar essa capacidade colocando mais mesas e cadeiras)</li>
            <li>25 mesas de madeira retangular tampo bege</li>
            <li>100 cadeiras de madeira estofadas cor marrom sem estofamento no encosto</li>
            <li>06 mesas redondas de madeira com tampo de vidro</li>
            <li>36 cadeiras estofadas com estofamento no encosto cor bege</li>
            <li>02 Banheiros com duchas</li>
            <li>Cozinha churrasqueira – espaço interno do salão</li>
            <li>Fogão industrial 05 bocas</li>
            <li>02 Pias</li>
            <li>Armários e balcões de apoio</li>
            <li>Forno para assados a gás</li>
            <li>WiFi - Salão de Festas 01 Senha: Fazenda 01</li>
            <li>WiFi - Salão de Festas 02 Senha: Fazenda 02</li>
          </ul>
          <p className="text-red-600">
            Observação: Não fornecemos material de limpeza, pratos, talheres, panelas, etc.)
          </p>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className="font-semibold">
            Churrasqueira externa
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-disc text-left ml-4">
            <li>Forno para costela de chão</li>
            <li>Forno de alvenaria tipo Iglu para assados</li>
            <li>Espetos de costela</li>
            <li>01 pia</li>
          </ul>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className="font-semibold">
            Churrasqueira interna
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-disc text-left ml-4">
            <li>Fogão a lenha industrial</li>
            <li>01 pia</li>
            <li>Sem espetos</li>
          </ul>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className="font-semibold">
            Espaço para cerimônia de casamento (Capela)

          </p>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-disc text-left ml-4">
            <li>Não possui cadeiras internas ou externas</li>
            <li>Integrada pelo deck com o salão de festas</li>
            <li>Área de deck 300mts - não possui cobertura</li>
          </ul>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className="font-semibold">Casa Pinheiro – Estilo alojamento dormitório no Salão de festas </p>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-disc text-left ml-4">
            <li>2 quartos de casal (04 pessoas)</li>
            <li>Espaço conjugado com 03 camas de casal e 04 de Solteiro (10 pessoas)</li>
            <li>10 colchões de solteiro para apoio</li>
            <li>01 banheiro com ducha na casa Pinheiro</li>
            <li>02 banheiros com ducha no Salão</li>
            <li>(Não fornecemos toalhas, roupas de cama e materiais de higiene e limpeza)</li>
            <li>(Fornecemos travesseiros e cobertas leves)</li>
            <li>WiFi - Salão de Festas 01 Senha: Fazenda 01</li>
            <li>WiFi - Salão de Festas 02 Senha: Fazenda 02</li>
            <li className="font-semibold underline">Esse espaço acomoda nas camas 14 pessoas + colchões de apoio</li>

          </ul>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className="font-semibold">
            Casa do Lago – casa completa – espaço inteiro
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-disc text-left ml-4">
            <li>04 quartos com camas de Casal (08 Pessoas)</li>
            <li>04 colchões de solteiro para apoio (04 pessoas)</li>
            <li>01 Berço</li>
            <li>02 Banheiros com 02 duchas cada</li>
            <li>Wifi – casa do lago Senha: casadolago</li>
            <li>Fornecemos travesseiros e cobertas leves</li>
            <li>Não fornecemos toalhas, roupas de cama e materiais de higiene e limpeza</li>
            <li className="font-semibold underline">Esse espaço acomoda nas camas 08 pessoas + 04 colchões de apoio.</li>
          </ul>

        </AccordionDetails>
      </Accordion>

    </div>
  );
}
