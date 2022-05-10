import { Stack, IconButton, Divider, Flex, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { FaTwitter, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  const sendMail = (e) => {
    window.location = 'mailto:yourmail@domain.com';
  };

  return (
    <>
      <Stack id='contact' direction='column' h='2px' w='1300px' p={4}>
        <Divider orientation='horizontal' />
      </Stack>
      <Flex>
        <Text mt={3} fontWeight='bold' fontSize='sm'>
          © {new Date().getFullYear()} Luciano Leyria{' '}
        </Text>
        <Box ml={800}>
          <Flex>
            <IconButton
              ml={3}
              icon={<FaTwitter />}
              isRound={true}
              onClick={() => {
                window.open('https://twitter.com/Luchinike');
              }}
            ></IconButton>
            <IconButton
              mb={2}
              ml={3}
              icon={<FaEnvelope />}
              isRound={true}
              onClick={(e) => sendMail(e)}
            ></IconButton>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
