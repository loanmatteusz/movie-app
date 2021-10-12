import React from 'react';
// import { Button } from '@chakra-ui/button';
import {
  Box,
  Link,
  ListItem,
  // SimpleGrid,
  Text,
  UnorderedList
} from '@chakra-ui/layout';
// import { Select } from '@chakra-ui/select';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function NavBar() {
  return (
    <Box bgColor="#252537" color="white" h="12vh" display="flex" alignItems="center" justifyContent="space-around">
          <Box display="none" cursor="pointer">
            <Box w="32px" h="2px" bg="#fff" m="8px"></Box>
            <Box w="32px" h="2px" bg="#fff" m="8px"></Box>
            <Box w="32px" h="2px" bg="#fff" m="8px"></Box>
          </Box>
          <Box bg="#252537" height="80px">
            <Link href="#" ml="10%">
              <Text fontSize="3xl" color="orange">Movie App</Text>
            </Link>
          </Box>
          <UnorderedList display="flex" listStyleType="none">
            <ListItem ml="15px" letterSpacing="1px">
              <Link href="#">Filmes</Link>
            </ListItem>
            <ListItem ml="15px" letterSpacing="1px">
              <Link href="#">Listas</Link>
            </ListItem>
            <ListItem ml="15px" letterSpacing="1px">
              <Link href="#">Notícias</Link>
            </ListItem>
            <ListItem ml="15px" letterSpacing="1px">
              <Link href="#">Lançamentos</Link>
            </ListItem>
          </UnorderedList>
          {/* <Box bg="#252537" height="80px">
          </Box>
          <Box bg="#252537" height="80px" display="flex" alignItems="center" justifyContent="flex-end">
            <Select placeholder="Worldwide" w="130px">
              <option value="brasil">Brasil</option>
              <option value="eua">EUA</option>
            </Select>
            <Button ml="100px" colorScheme="#1c1c28" variant="outline">Login</Button>
          </Box> */}
      </Box>
  );
}

export default NavBar;
