import React from 'react';
// import { Button } from '@chakra-ui/button';
import {
  Box,
  Container,
  Link,
  ListItem,
  Text,
  UnorderedList
} from '@chakra-ui/layout';
// import { Select } from '@chakra-ui/select';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function NavBar() {
  return (
    <Box bgColor="#252537" h="10vh" display="flex" alignItems="center" justifyContent="center">
      <Container variant="responsive">

        <Container cursor="pointer" variant="sanduich">
          <Box m="8px" w="32px" h="2px" bgColor="#fff"></Box>
          <Box m="8px" w="32px" h="2px" bgColor="#fff"></Box>
          <Box m="8px" w="32px" h="2px" bgColor="#fff"></Box>
        </Container>

        <Container w="180px" display="flex" alignItems="center" justifyContent="center">
          <Text fontSize="3xl" color="orange">Movie App</Text>
        </Container>

        <Container variant="list" w="360px" color="white">
          <UnorderedList display="flex" listStyleType="none">
            <ListItem m="0 5px" letterSpacing="1.5px">
              <Link href="#">Filmes</Link>
            </ListItem>
            <ListItem m="0 5px" letterSpacing="1.5px">
              <Link href="#">Listas</Link>
            </ListItem>
            <ListItem m="0 5px" letterSpacing="1.5px">
              <Link href="#">Notícias</Link>
            </ListItem>
            <ListItem m="0 5px" letterSpacing="1.5px">
              <Link href="#">Lançamentos</Link>
            </ListItem>
          </UnorderedList>
        </Container>

      </Container>
    </Box>
  );
}

export default NavBar;
