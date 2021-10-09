/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { Container, Text } from '@chakra-ui/react'
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
      <Container
        variant="headComponents"
      >
        <Container
          variant="lateralContainer"
        >
          <Text
            textStyle="h2"
            variant="lateralTitle"
          >
            Most Searched
          </Text>

          <Container
            variant="mostSearchRanking"
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
          </Container>

        </Container>

        <Container>
          <SearchInput
            value={search}
            onChange={(search: string) => fetch(search)}
          />
        </Container>

        <Container>
          {data && data.total_results > 20 ?
            <Pagination
              search={search}
              pages={data.total_pages}
              currentPage={page}
              fetch={fetch}
            /> : ''
          }
        </Container>

      </Container>

      <Container
        variant="movies"
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
