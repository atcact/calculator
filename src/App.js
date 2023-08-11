import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Stack,
  Input,
  Container,
  Grid,
  GridItem,
  theme,
  Button, ButtonGroup
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const [display, setDisplay] = useState('');
  
  const handleClick = (value) => {
    setDisplay(display + value);
  }
  
  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  }
  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
      <Container  centerContent>
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Text fontSize='60px' fontWeight='bold'> Calculator</Text>
          <Grid
            h='400px'
            w='600px'
            templateRows='repeat(4, 1fr)'
            templateColumns='repeat(4, 1fr)'
            gap={4}
          >
            <GridItem as='text' h='80px' rowSpan={1} colSpan={4} bg='blue.200' ColorModeSwitcher
            borderRadius='6px' fontSize='50px' fontWeight='bold' > {display}
            </GridItem> 
            <GridItem as='button' onClick={() => handleClick('7')} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> 7
            </GridItem> 
            <GridItem as='button' onClick={() => handleClick('8')} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> 8
            </GridItem> 
            <GridItem as='button' onClick={() => handleClick('9')} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> 9
            </GridItem>
            <GridItem as='button' onClick={() => handleClick('/')} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> /
            </GridItem> 
            <GridItem as='button' onClick={() => handleClick('4')} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> 4
            </GridItem> 
            <GridItem as='button' onClick={() => handleClick('5')} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> 5
            </GridItem> 
            <GridItem as='button' onClick={() => handleClick('6')} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> 6
            </GridItem> 
            <GridItem as='button' onClick={() => handleClick('*')} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> *
            </GridItem> 
            <GridItem as='button' onClick={() => handleClick('1')} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> 1
            </GridItem> 
            <GridItem as='button' onClick={() => handleClick('2')} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> 2
            </GridItem> 
            <GridItem as='button' onClick={() => handleClick('3')} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> 3
            </GridItem> 
            <GridItem as='button' onClick={() => handleClick('+')} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> +
            </GridItem> 
            <GridItem as='button' onClick={clearDisplay} rowSpan={1} colSpan={1} bg='tomato' 
            _hover={{ bg: '#e07670' }} borderRadius='6px' fontSize='30px' fontWeight='bold'> Clear
            </GridItem> 
            <GridItem as='button' onClick={() => handleClick('0')} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> 0
            </GridItem> 
            <GridItem as='button' onClick={calculate} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> =
            </GridItem> 
            <GridItem as='button' onClick={() => handleClick('-')} rowSpan={1} colSpan={1} bg='#c78aed' 
            _hover={{ bg: '#d7b4ed' }} borderRadius='6px' fontSize='40px' fontWeight='bold'> -
            </GridItem> 
          </Grid>
          {/* <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack> */}
          {/* <Button onClick={() => handleClick('0')} colorScheme='blue'>0</Button> */}
        </Grid>
      </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
