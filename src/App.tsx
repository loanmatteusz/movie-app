import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import Pagination from './components/Pagination';
import SearchInput from './components/SearchInput';

const API_KEY = `a5a206f233ebfed8f2b30f9da1307115`;

// type MovieData = {
//   adult?: boolean,
//   backdrop_path?: string,
//   genre_ids?: number[],
//   id?: number,
//   original_language?: string,
//   original_title?: string,
//   overview?: string;
//   popularity?: number,
//   poster_path?: string,
//   release_date?: string,
//   title?: string,
//   video?: boolean,
//   vote_average?: number,
//   vote_count?: number
// }

type PropsMovie = {
  id?: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

function App() {
  const [state, setState] = useState({
    movies: [],
    search: '',
    totalResults: 0,
    totalPages: 1,
    currentPage: 1,

    title: 'Popularity'
  });

  useEffect(() => {
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.search]);

  function setPage(pageNumber: number) {
    let api = "";
    let titleTerm = "";
    if (state.search) {
      api = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${state.search}&page=${pageNumber}`;
      titleTerm = 'Researched';
    }
    else {
      api = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${pageNumber}`;
      titleTerm = 'Popularity';
    }
    fetch(api)
      .then(response => response.json())
      .then(data => {
        setState({
          ...state,
          movies: data.results,
          totalResults: data.total_results,
          totalPages: data.total_pages,
          currentPage: pageNumber,

          title: titleTerm
        })
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <header>

        <div className="titles">
          <h2>
            {state.title}
          </h2>
        </div>

        <div className="input-area">
          <SearchInput
            value={state.search}
            onChange={(search: string) => setState({ ...state, search: search })}
          />
        </div>

        <div className="pagination">
          {state.totalResults > 20 ?
            <Pagination
              pages={state.totalPages}
              currentPage={state.currentPage}
              setPage={setPage}
            /> : ''
          }
        </div>

      </header>

      <div className="movie-content">
        {state.search && state.movies.length === 0 ?
          <p className="notFound">Nenhum filme com este termo foi encontrado.</p>
          : ""
        }
        {state.movies.length > 0 ?
          state.movies.map((movie: PropsMovie) => {
            return (
              <Movie
                key={movie.id}
                {...movie}
              />
            );
          })
          : ""
        }
      </div>
    </>
  );
}

export default App;
