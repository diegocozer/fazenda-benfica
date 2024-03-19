/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdAlternateEmail } from 'react-icons/md';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isWeb() ? 400 : 320,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function isWeb() {
  return window.innerWidth > 768;
}

export default function TransitionsModal({ setAbrirModal, abrirModal, enviarMensagemWpp }) {
  const handleClose = () => setAbrirModal(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={abrirModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={abrirModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Contatos
            </Typography>
            <Typography id="transition-modal-description " sx={{ mt: 2 }}>
              <div
                className="flex  items-center cursor-pointer"
                onClick={() => {
                  enviarMensagemWpp();
                  setAbrirModal(false);
                }}
              >
                <div className="text-green-500 mr-3 ">
                  <IoLogoWhatsapp className="md:h-11 md:w-11 h-8 w-8 " />
                </div>
                <p>(47) 98828-2047</p>
              </div>
            </Typography>
            <Typography id="transition-modal-description " sx={{ mt: 2 }}>
              <div
                className="flex  items-center cursor-pointer"
                onClick={() => {
                  window.open('mailto:fazendabenficasc@gmail.com');
                  setAbrirModal(false);
                }}
              >
                <div className="text-gray-900 mr-3">
                  <MdAlternateEmail className="md:h-11 md:w-11 h-8 w-8" />
                </div>
                <p>fazendabenficasc@gmail.com</p>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
