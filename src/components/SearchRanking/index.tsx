/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { VStack, Text, Flex, Button } from '@chakra-ui/react';

import { IMostWanted } from '../../types/index';

interface Props {
  mostWanted: IMostWanted[];
}

const SearchRanking = ({ mostWanted }: Props) => {
  return (
    <VStack mt="5px" w="100%">
      <Text>Mais pesquisados</Text>
      <Flex w={{ base: "100", sm: "100%", md: "80%", lg: "60%", xl: "45%" }} h={["160px", "140px", "80px"]} borderRadius="25px" display="flex" alignItems="center" justifyContent="center" wrap="wrap"> {/* Mais pesquisados */}
        {
          mostWanted && mostWanted.length !== 0
            ? mostWanted.map((item: IMostWanted) => {
              return (
                <Button key={item.name} m=".3rem .2rem" colorScheme="yellow" variant="outline">{item.name}: {item.quantity}</Button>
              )
            })
            : <Text color="gray">Nenhuma pesquisa iniciada, busque por algum título na barra de pesquisa.</Text>
        }
      </Flex>
    </VStack>
  );
}

export default SearchRanking;