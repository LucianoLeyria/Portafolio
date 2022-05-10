import { useState, useEffect } from 'react';
import { Icon, Image, IconButton } from '@chakra-ui/react';
import { FaArrowCircleUp } from 'react-icons/fa';

export const BackToTopButton = () => {
  const goUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <IconButton
        icon={<FaArrowCircleUp />}
        isRound={true}
        fontSize={50}
        ml={700}
        onClick={goUp}
      ></IconButton>
    </>
  );
};
