import {
  Circle,
  useColorMode,
  useMediaQuery,
  Stack,
  Flex,
  Box,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import Cara from '../pngs/cara.png';
import swal from 'sweetalert';

export const Header = () => {
  const { colorMode } = useColorMode;
  const isDark = colorMode === 'dark';
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  const handleAlert = () => {
    swal(
      'Soy una persona muy responsable, dínamico y creativo, me comprometo mucho cuando hay que solucionar problemas, en el trabajo en equipo me gusta aportar ideas e intercambiar opiniones con los compañeros. Dispuesto a aprender diferentes tecnologías'
    );
  };

  return (
    <Stack>
      <Flex
        direction={isNotSmallerScreen ? 'row' : 'column'}
        spacing='200px'
        p={isNotSmallerScreen ? '32' : '0'}
        alignSelf='flex-start'
      >
        <Box mt={isNotSmallerScreen ? '0' : '16'} align='flex-start'>
          <Text fontSize='30px' fontWeight='semibold'>
            Hola 👋, soy
          </Text>
          <Text
            fontSize='7xl'
            fontWeight='bold'
            bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
            bgClip='text'
          >
            Luciano Leyría
          </Text>
          <Text color={isDark ? 'gray.200' : 'gray.500'}>
            Programador Full Stack 💻
          </Text>
          <Button mt={8} colorScheme='blue' onClick={handleAlert}>
            ¿Porque yo?
          </Button>
        </Box>
        <Image
          ml={50}
          alignSelf='center'
          mt={isNotSmallerScreen ? '0' : '12'}
          mb={isNotSmallerScreen ? '0' : '12'}
          borderRadius='full'
          src={Cara}
        />
      </Flex>
    </Stack>
  );
};
