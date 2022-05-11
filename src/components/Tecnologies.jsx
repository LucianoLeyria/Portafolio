import {
  Flex,
  HStack,
  VStack,
  Stack,
  Text,
  useColorMode,
  Divider,
  Box,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { useRef, useState, useEffect } from 'react';

import { skillsArray } from '../data/data';

export const Tecnologies = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  const current = useRef(skillsArray);

  return (
    <>
      <Stack id='technologies' direction='column' h='80px' w='900px' p={4}>
        <Divider orientation='horizontal' />
      </Stack>
      <Text
        // fontSize='5xl'
        fontWeight='bold'
        bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
        bgClip='text'
        fontSize={isNotSmallerScreen ? '50' : '30'}
      >
        Las tecnologías que conozco y utilizo son las siguientes
      </Text>
      <HStack>
        <Box>
          <Flex
            width='100%'
            maxWidth='1000px'
            minWidth='300px'
            mb={100}
            justifyContent={isNotSmallerScreen ? '' : 'center'}
            rowGap={5}
            columnGap='25px'
            flexWrap='wrap'
          >
            {current.current?.map((t, index) => {
              return (
                <Box key={index}>
                  <VStack>
                    <Image
                      w={35}
                      h={35}
                      mt={10}
                      src={t.image}
                      name={t.name}
                      _hover={{ transform: 'scale(1.3)' }}
                    />
                    <Text fontWeight='bold'>{t.name}</Text>
                  </VStack>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </HStack>
    </>
  );
};
