import { useState, useEffect } from 'react';
import { Icon, Image, IconButton } from '@chakra-ui/react';
import { FaArrowCircleUp } from 'react-icons/fa';

export const BackToTopButton = () => {
  const goUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (scrollY > 100) {
      setShow(true);
    } else setShow(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <IconButton
        color='white'
        position='fixed'
        bottom='5%'
        right='3%'
        icon={<FaArrowCircleUp />}
        isRound={true}
        fontSize={39}
        onClick={goUp}
        display={show ? 'block' : 'none'}
        _hover={{
          transform: 'scale(1.2)',
          transition: 'all 0.5s ease',
          color: 'blue.500',
        }}
      ></IconButton>
    </>
  );
};
