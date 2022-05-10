import './App.css';
import { Spacer, useColorMode } from '@chakra-ui/react';
import {
  VStack,
  Flex,
  IconButton,
  Box,
  Heading,
  extendTheme,
  ChakraProvider,
} from '@chakra-ui/react';
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Tecnologies } from './components/Tecnologies';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { BackToTopButton } from './components/BackToTopButton.jsx';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box
      className='App'
      textAlign='center'
      fontSize='xl'
      w={'100%'}
      maxW={1100}
      mx='auto'
    >
      <VStack padding={5}>
        <Flex width='100%'>
          <Navbar />
          <Heading
            ml='8'
            size='md'
            fontWeight='semibold'
            color='cyan.400'
          ></Heading>
          <Spacer></Spacer>
          <IconButton
            ml={2}
            icon={<FaGithub />}
            isRound={true}
            onClick={() => window.open('https://github.com/LucianoLeyria')}
          ></IconButton>
          <IconButton
            ml={2}
            icon={<FaInstagram />}
            isRound={true}
            onClick={() =>
              window.open('https://www.instagram.com/lucholeyria/')
            }
          ></IconButton>
          <IconButton
            ml={2}
            icon={<FaLinkedin />}
            isRound={true}
            onClick={() =>
              window.open('https://www.linkedin.com/in/Lucianoleyria/')
            }
          ></IconButton>
          <IconButton
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound={true}
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
        <Header></Header>
        <Tecnologies />
        <Profile></Profile>
        <Flex>
          <BackToTopButton />
        </Flex>
        <Contact></Contact>
      </VStack>
    </Box>
  );
}

export default App;
