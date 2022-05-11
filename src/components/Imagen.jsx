import React from 'react';
import { Image } from '@chakra-ui/react';
import Cara from '../pngs/cara.png';

export const Imagen = () => {
  return (
    <div>
      <Image
        borderRadius='full'
        boxSize='150px'
        src={Cara}
        alt='Luciano Leyria'
      />
    </div>
  );
};
