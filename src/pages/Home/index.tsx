/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import {
  Box,
  Text,
  Divider,
  HStack,
  VStack,
  Grid
} from '@chakra-ui/react'
import { Icon, ChevronRightIcon } from '@chakra-ui/icons';

import SearchInput from '../../components/SearchInput';
import Movie from '../../components/Movie';
import Store from '../../mobx/store';
import NavBar from '../../components/NavBar';

import SearchRanking from '../../components/SearchRanking';
import ReadMore from '../../components/ReadMore';


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
          <VStack mt="5px" alignItems="center" justifyContent="center">
            <SearchInput value={search} onChange={fetch} />
            <SearchRanking mostWanted={mostWantedOrderned} />
          </VStack>

          <Divider m=".5rem 0" borderColor="transparent" />

          <ReadMore />

          <Divider m="1rem 0" borderColor="transparent" />

          <Box m="0 auto">
            <HStack>
              <Text fontSize="3xl">Mais populares</Text>
              <Icon as={ChevronRightIcon} w={10} h={10} />
            </HStack>
            <Divider m=".5rem 0" borderColor="transparent" />
            <Grid pb="10%" templateColumns={{base: "repeat(3, 1fr)", sm: "repeat(4, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(5, 1fr)"}} gap={4}>
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
