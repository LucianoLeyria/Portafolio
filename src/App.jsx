import './App.css';
import { Spacer, useColorMode } from '@chakra-ui/react';
import {
  VStack,
  Flex,
  IconButton,
  Box,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaTwitter,
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
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <>
      <Flex>
        <Box
          className='App'
          textAlign='center'
          fontSize='xl'
          w={'100%'}
          maxW={1300}
          mx='auto'
        >
          <VStack padding={5}>
            <Flex
              width='100%'
              direction={isNotSmallerScreen ? 'row' : 'column'}
              flexWrap='wrap'
            >
              <Navbar />
              <Heading
                ml='8'
                size='md'
                fontWeight='semibold'
                color='cyan.400'
              ></Heading>
              <Spacer></Spacer>

              <Box
                direction={isNotSmallerScreen ? 'row' : 'column'}
                minWidth={isNotSmallerScreen ? '500' : '300'}
              >
                <IconButton
                  ml={2}
                  icon={<FaGithub />}
                  isRound={true}
                  onClick={() =>
                    window.open('https://github.com/LucianoLeyria')
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
                  ml={2}
                  icon={<FaInstagram />}
                  isRound={true}
                  onClick={() =>
                    window.open('https://www.instagram.com/lucholeyria/')
                  }
                ></IconButton>

                <IconButton
                  ml={3}
                  icon={<FaTwitter />}
                  isRound={true}
                  onClick={() => {
                    window.open('https://twitter.com/Luchinike');
                  }}
                ></IconButton>
                <IconButton
                  ml={20}
                  icon={isDark ? <FaSun /> : <FaMoon />}
                  isRound={true}
                  onClick={toggleColorMode}
                ></IconButton>
              </Box>
            </Flex>
            <Header></Header>
            <Tecnologies />
            <Profile></Profile>

            <Contact></Contact>
          </VStack>
        </Box>
      </Flex>
      <BackToTopButton />
    </>
  );
}

export default App;
