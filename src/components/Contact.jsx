import {
  Stack,
  IconButton,
  Divider,
  Flex,
  Box,
  Text,
  useMediaQuery,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { FaTwitter, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  // const sendMail = (e) => {
  //   window.location.href = 'mailto:luciano.leyria96@gmail.com';
  // };

  return (
    <>
      <Stack id='contact' direction='column' h='2px' w='1300px' p={4}>
        <Divider orientation='horizontal' />
      </Stack>
      <Flex>
        <Text mt={3} fontWeight='bold' fontSize='sm'>
          © {new Date().getFullYear()} Luciano Leyria{' '}
        </Text>
        <Box>
          <Flex>
            <IconButton
              as={Link}
              mb={2}
              ml={3}
              icon={<FaEnvelope />}
              isRound={true}
              // onClick={(e) => sendMail(e)}
              href='mailto:luciano.leyria96@gmail.com'
              isExternal
            ></IconButton>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
