import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import * as React from 'react';

export default function AccordionInformacoesAdc() {
  return (
    <div className="mt-10 mx-6" data-aos="zoom-in">
      <div>
        <h3 className="text-2xl text-center text-gray-500 font-semibold mb-8 text-gray-400 font-bold">
          Informações adicionais
        </h3>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className="font-semibold">
            Incluso nos dois Pacotes:

          </p>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-disc text-left ml-4">
            <li>Uso do espaço locado da Fazenda por 03 dias</li>
            <li>Liberação para o Pré-wedding (Fotos e Filmagens) (04 pessoas)</li>
            <li> A noiva pode usar o Veículo Rural (antigo) para sua entrada.</li>

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
            Dos valores:

          </p>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-disc text-left ml-4">
            <li>Pacote para locações que irão usar a pousada</li>
            <li>Pacote sem uso de pousadas</li>
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
            Forma de Pagamento:

          </p>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-disc text-left ml-4">
            <li>Parcelamos em até 10 vezes ou conforme negociação.</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
