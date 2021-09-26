import { observer, useLocalObservable } from 'mobx-react-lite';

import Store from './mobx/store';

import './App.css';
import Movie from './components/Movie';
import SearchInput from './components/SearchInput';
import Pagination from './components/Pagination';
import { useEffect } from 'react';

function App() {
  const store = useLocalObservable(() => new Store());

  useEffect(() => {
    return store.disposer();
  }, [store]);

  return (
    <>
      <header>

        <div className="lateral-content">
          <div className="title">
            <h2>
              Most Searched
            </h2>
          </div>
          <div className="most-wanted">
            {
              store.mostWantedOrderned && store.mostWantedOrderned.length !== 0
                ? store.mostWantedOrderned.map(item => {
                  return (
                    <p
                      key={item.name}
                    >
                      {item.name} : {item.quantity}
                    </p>
                  )
                })
                : ""
            }
          </div>
        </div>

        <div className="input-area">
          <SearchInput
            value={store.search}
            onChange={(search: string) => store.fetch(search)}
          />
        </div>

        <div className="pagination">
          {store.data && store.data.total_results > 20 ?
            <Pagination
              search={store.search}
              pages={store.data.total_pages}
              currentPage={store.page}
              fetch={store.fetch}
            /> : ''
          }
        </div>

      </header>

      <div className="movie-content">
        {store.data && store.data.results.length !== 0 ?
          store.data.results.map(movie => (
            <Movie
              key={movie.id}
              {...movie}
            />
          ))
          : ""
        }
      </div>
    </>
  );
}

export default observer(App);
