/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import {
  Box,
  Text,
  Divider,
  HStack,
  VStack,
  Flex,
  Grid,
  Button
} from '@chakra-ui/react'
import { Icon, ChevronRightIcon } from '@chakra-ui/icons';

import SearchInput from '../../components/SearchInput';
import Movie from '../../components/Movie';
import Store from '../../mobx/store';
import NavBar from '../../components/NavBar';


function Home() {
  const store = useLocalObservable(() => new Store());

  const {
    data,
    search,
    mostWantedOrderned,
    fetch
  } = store;

  useEffect(() => {
    return store.disposer();
  }, [store]);

  return (
    <>
      <NavBar />

      <Box m="0 auto" bgColor="#1c1c28" color="white">
        <Box m={["0 2%", "0 5%", "0 10%", "0 12%", "0 15%"]}>
          <VStack alignItems="center" justifyContent="center">
            <SearchInput value={search} onChange={fetch} />

            <VStack w="100%">
              <Text>Mais pesquisados</Text>
              <Flex w={["100","100%","80%","60%","45%"]} h={["160px","140px","80px"]} borderRadius="25px" display="flex" alignItems="center" justifyContent="center" wrap="wrap"> {/* Mais pesquisados */}
                {
                  mostWantedOrderned && mostWantedOrderned.length !== 0
                    ? mostWantedOrderned.map((item: any) => {
                      return (
                        <Button key={item.name} m=".3rem .2rem" colorScheme="yellow" variant="outline">{item.name}: {item.quantity}</Button>
                      )
                    })
                    : <Text color="gray">Nenhuma pesquisa iniciada, busque por algum título na barra de pesquisa.</Text>
                }
              </Flex>
            </VStack>
          </VStack>

          <Divider m=".5rem 0" borderColor="transparent" />

          <Box w="100%" m="0 auto">
            <Text fontSize="3xl">Assistir a filmes online</Text>
            <Divider mb=".5rem" borderColor="orange" />
            <Text fontSize={["sm", "sm", "md", "md", "lg"]}>
              Encontre seu próximo filme para assistir online e veja em quais plataformas ele está disponível.
              <br />
              Sabemos do seu desafio em encontrar um filme online dublado ou legendado entre as mais diversas plataformas de streaming, como Netflix, YouTube, Amazon Prime Video, NOW, Apple TV e outras.
              <br />
              No Filmelier nossa missão é te ajudar a encontrar os melhores filmes em alta qualidade (HD) para você assistir online, no conforto da sua casa e em qual serviço de streaming preferir.
              <br />
              São diversos lançamentos e filmes antigos de gêneros como drama, terror, ação, comédia, suspense e muito mais.
              <br />
              Continue navegando e descubra seu próximo filme para ver online hoje.
            </Text>
          </Box>

          <Divider m="1rem 0" borderColor="transparent" />

          <Box m="0 auto">
            <HStack>
              <Text fontSize="3xl">Mais populares</Text>
              <Icon as={ChevronRightIcon} w={10} h={10} />
            </HStack>
            <Divider m=".5rem 0" borderColor="transparent" />
            <Grid pb="10%" templateColumns={["repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)", "repeat(5, 1fr)"]} gap={4}>
              {data && data.results.length !== 0 ?
                data.results.map((movie: any) => (
                  <Movie
                    key={movie.id}
                    {...movie}
                  />
                ))
                : "Nenhum filme encontrado"
              }
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default observer(Home);
