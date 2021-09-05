import { observer, useLocalObservable } from 'mobx-react-lite';
import { useEffect } from 'react';

import Store from './mobx/store';

import './App.css';
import Movie from './components/Movie';
import SearchInput from './components/SearchInput';
import Pagination from './components/Pagination';

function App() {

  const store = useLocalObservable(() => new Store());
  useEffect(() => {
    store.fetch();
  }, [store]);

  return (
    <>
      <header>

        <div className="titles">
          <h2>
            Popularity
          </h2>
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
