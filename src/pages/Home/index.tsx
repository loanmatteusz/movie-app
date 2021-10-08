/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { Box, HStack, Container, Text } from '@chakra-ui/react'
import { observer, useLocalObservable } from 'mobx-react-lite';

import SearchInput from '../../components/SearchInput';
import Pagination from '../../components/Pagination';
import Movie from '../../components/Movie';

import Store from '../../mobx/store';

// import './App.css';

function Home() {
  const store = useLocalObservable(() => new Store());

  const {
    data,
    page,
    search,
    mostWantedOrderned,
    fetch
  } = store;

  useEffect(() => {
    return store.disposer();
  }, [store]);

  return (
    <>
      <HStack
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr"
        bgColor="#2b2e52"
        padding=".5rem"
        paddingTop="12rem"
      >
        <Container
          margin="auto"
          display="flex"
          flexDirection="column-reverse"
          justifyContent="space-between"
        >
          <Text
            display="flex"
            flexDirection="row"
            alignItems="baseline"
            justifyContent="center"
            color="#ffffff"
            marginBottom="-30px"
          >
            <h2>Most Searched</h2>
          </Text>

          <Box
            marginTop="-12rem"
            color="white"
            textAlign="center"
            backgroundColor="#3a3c65"
            borderRadius="10px"
          >
            {
              mostWantedOrderned && mostWantedOrderned.length !== 0
                ? mostWantedOrderned.map((item: any) => {
                  return (
                    <Text
                      key={item.name}
                    >
                      {item.name} : {item.quantity}
                    </Text>
                  )
                })
                : ""
            }
          </Box>

        </Container>

        <Container>
          <SearchInput
            value={search}
            onChange={(search: string) => fetch(search)}
          />
        </Container>

        <Container className="pagination">
          {data && data.total_results > 20 ?
            <Pagination
              search={search}
              pages={data.total_pages}
              currentPage={page}
              fetch={fetch}
            /> : ''
          }
        </Container>

      </HStack>

      <Container
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        maxWidth="90%"
        marginLeft="auto"
        marginRight="auto"
      >
        {data && data.results.length !== 0 ?
          data.results.map((movie: any) => (
            <Movie
              key={movie.id}
              {...movie}
            />
          ))
          : ""
        }
      </Container>
    </>
  );
}

export default observer(Home);
