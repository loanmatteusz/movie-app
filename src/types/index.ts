export interface IData {
  page?: number;
  results?: IMovie[];
  total_pages?: number;
  total_results?: number;
}

export interface IMovie {
  id?: number;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
}

export interface IMostWanted {
  name: string;
  quantity: number;
}
