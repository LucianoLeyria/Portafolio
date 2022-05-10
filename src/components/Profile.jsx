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
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <>
      <Box id='proyectos' alignSelf='center' px='40' py='16'>
        <Text
          fontSize='6xl'
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
      <Flex>
        <Box alignSelf='center'>
          <Heading ml='300px' fontWeight='extrabold' color='cyan.500'>
            Videogames web
          </Heading>
          <Text ml={300} mt={15}>
            Página web donde podrás crear, buscar, filtrar y ver detalles de los
            videojuegos.
          </Text>
        </Box>
        <Box mb={50} w={1000} mr={200} px='32' py='16'>
          <Image
            _hover={{ transform: 'scale(1.2)', transition: 'all 0.5s ease' }}
            border='2px solid black'
            borderRadius='8px'
            src={videogames}
            alt='Luciano Leyria'
            cursor='pointer'
            onClick={(e) => {
              window.open('https://frontpi.herokuapp.com/', '_blank');
            }}
          ></Image>
          <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}></Flex>
        </Box>
      </Flex>

      <Flex>
        <Box w={1000} ml={50} px='32' py='16'>
          <Image
            _hover={{ transform: 'scale(1.2)', transition: 'all 0.5s ease' }}
            border='2px solid black'
            borderRadius='8px'
            src={hostel}
            alt='Luciano Leyria'
            cursor='pointer'
            onClick={(e) => {
              window.open('https:soyhostel.com', '_blank');
            }}
          ></Image>
          <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}></Flex>
        </Box>
        <Box alignSelf='center' py='16'>
          <Heading mr={400} fontWeight='extrabold' color='cyan.500'>
            SoyHostel
          </Heading>
          <Text mr={400} mt={15}>
            Página web donde podrás llevar a cabo la gestion de un Hostel.
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box alignSelf='center'>
          <Heading ml='300px' fontWeight='extrabold' color='cyan.500'>
            E-commerce zapatillas
          </Heading>
          <Text ml={300} mt={15}>
            Página web estilo e-commerce donde podras comprar zapatillas
          </Text>
        </Box>
        <Box w={1000} mr={200} px='32' py='16'>
          <Image
            _hover={{ transform: 'scale(1.2)', transition: 'all 0.5s ease' }}
            border='2px solid black'
            borderRadius='8px'
            src={zapas}
            alt='Luciano Leyria'
            cursor='pointer'
            onClick={(e) => {
              window.open('https://myecommercee.netlify.app/', '_blank');
            }}
          ></Image>
          <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}></Flex>
        </Box>
      </Flex>
      <Flex>
        <Box w={1000} ml={50} px='32' py='16'>
          <Image
            _hover={{ transform: 'scale(1.2)', transition: 'all 0.5s ease' }}
            borderRadius='8px'
            border='2px solid black'
            src={veterinario}
            alt='Luciano Leyria'
            cursor='pointer'
            onClick={(e) => {
              window.open('https://myecommercee.netlify.app/', '_blank');
            }}
          ></Image>
          <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}></Flex>
        </Box>
        <Box alignSelf='center' py='16'>
          <Heading mr={400} fontWeight='extrabold' color='cyan.500'>
            Turnos para el veterinario
          </Heading>
          <Text mr={400} mt={15}>
            Página web donde podrás hacer el pedido de un turno para tu mascota
            en el veterinario.
          </Text>
        </Box>
      </Flex>
    </>
  );
};
