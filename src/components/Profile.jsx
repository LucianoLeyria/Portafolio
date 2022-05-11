import {
  Flex,
  Text,
  Box,
  Heading,
  useMediaQuery,
  Image,
  Stack,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import videogames from '../pngs/videogames.png';
import hostel from '../pngs/hostel.png';
import zapas from '../pngs/zapas.png';
import veterinario from '../pngs/veterinario.png';

export const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:680px)');

  return (
    <>
      <Box
        alignItems='center'
        id='proyectos'
        maxWidth={isNotSmallerScreen ? '1000px' : '360px'}
        minWidth='300px'
      >
        <Text
          fontSize={isNotSmallerScreen ? '70' : '40'}
          fontWeight='bold'
          bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
          bgClip='text'
        >
          Mis Proyectos
        </Text>
        <Stack direction='column' w='600px' p={4}>
          <Divider orientation='horizontal' />
        </Stack>
      </Box>
      <Flex
        flexDirection='column'
        rowGap='100px'
        maxWidth={isNotSmallerScreen ? '100%' : '470px'}
      >
        <Flex
          alignItems='center'
          w='100%'
          minWidth='300px'
          rowGap='10px'
          minHeight='fit-content'
          justifyContent='space-between'
          direction={isNotSmallerScreen ? 'row' : 'column'}
        >
          <Box
            mt={20}
            alignSelf='center'
            padding={isNotSmallerScreen ? '90' : '10px'}
          >
            <Heading fontWeight='extrabold' color='cyan.500'>
              Videogames web
            </Heading>
            <Text>
              Página web donde podrás crear, buscar, filtrar y ver detalles de
              los videojuegos.
            </Text>
          </Box>
          <Box
            position='relative'
            minWidth='300px'
            maxWidth={isNotSmallerScreen ? '1000px' : '360px'}
            h={isNotSmallerScreen ? '290px' : '270px'}
            w='100%'
          >
            <Image
              h='100%'
              w='100%'
              objectFit='cover'
              position='absolute'
              border='2px solid black'
              borderRadius='8px'
              cursor='pointer'
              _hover={{ transform: 'scale(1.1)', transition: 'all 0.5s ease' }}
              alt='Luciano Leyria'
              src={videogames}
              onClick={(e) => {
                window.open('https://frontpi.herokuapp.com/', '_blank');
              }}
            ></Image>
          </Box>
        </Flex>

        <Flex
          alignItems='center'
          w='100%'
          minWidth='300px'
          rowGap='10px'
          minHeight='fit-content'
          justifyContent='space-between'
          direction={isNotSmallerScreen ? 'row' : 'column-reverse'}
        >
          <Box
            position='relative'
            minWidth='300px'
            maxWidth={isNotSmallerScreen ? '1000px' : '360px'}
            h={isNotSmallerScreen ? '290px' : '270px'}
            w='100%'
          >
            <Image
              h='100%'
              w='100%'
              objectFit='cover'
              position='absolute'
              border='2px solid black'
              borderRadius='8px'
              cursor='pointer'
              _hover={{ transform: 'scale(1.1)', transition: 'all 0.5s ease' }}
              alt='Luciano Leyria'
              src={hostel}
              onClick={(e) => {
                window.open('https://soyhostel.com', '_blank');
              }}
            ></Image>
          </Box>
          <Box alignSelf='center' padding={isNotSmallerScreen ? '90' : '10px'}>
            <Heading fontWeight='extrabold' color='cyan.500'>
              SoyHostel
            </Heading>
            <Text>
              Página web donde podrás llevar a cabo la gestion de un Hostel.
            </Text>
          </Box>
        </Flex>
        <Flex
          alignItems='center'
          w='100%'
          minWidth='300px'
          rowGap='10px'
          minHeight='fit-content'
          justifyContent='space-between'
          direction={isNotSmallerScreen ? 'row' : 'column'}
        >
          <Box alignSelf='center' padding={isNotSmallerScreen ? '90' : '10px'}>
            <Heading fontWeight='extrabold' color='cyan.500'>
              E-commerce zapatillas
            </Heading>
            <Text>
              Página web estilo e-commerce donde podras comprar zapatillas
            </Text>
          </Box>
          <Box
            position='relative'
            minWidth='300px'
            maxWidth={isNotSmallerScreen ? '1000px' : '360px'}
            h={isNotSmallerScreen ? '290px' : '270px'}
            w='100%'
          >
            <Image
              h='100%'
              w='100%'
              objectFit='cover'
              position='absolute'
              border='2px solid black'
              borderRadius='8px'
              cursor='pointer'
              _hover={{ transform: 'scale(1.1)', transition: 'all 0.5s ease' }}
              alt='Luciano Leyria'
              src={zapas}
              onClick={(e) => {
                window.open('https://myecommercee.netlify.app/', '_blank');
              }}
            ></Image>
          </Box>
        </Flex>
        <Flex
          alignItems='center'
          w='100%'
          minWidth='300px'
          minHeight='fit-content'
          justifyContent='space-between'
          rowGap='10px'
          direction={isNotSmallerScreen ? 'row' : 'column-reverse'}
        >
          <Box
            position='relative'
            minWidth='300px'
            maxWidth={isNotSmallerScreen ? '1000px' : '360px'}
            h={isNotSmallerScreen ? '290px' : '270px'}
            w='100%'
          >
            <Image
              h='100%'
              w='100%'
              objectFit='cover'
              position='absolute'
              border='2px solid black'
              borderRadius='8px'
              cursor='pointer'
              _hover={{ transform: 'scale(1.1)', transition: 'all 0.5s ease' }}
              alt='Luciano Leyria'
              src={veterinario}
              onClick={(e) => {
                window.open('https://citaspet.netlify.app/', '_blank');
              }}
            ></Image>
          </Box>
          <Box alignSelf='center' padding={isNotSmallerScreen ? '90' : '10px'}>
            <Heading fontWeight='extrabold' color='cyan.500'>
              Turnos para el veterinario
            </Heading>
            <Text>
              Página web donde podrás hacer el pedido de un turno para tu
              mascota en el veterinario.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
