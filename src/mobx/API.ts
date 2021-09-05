import axios from "axios";
import { IData } from "../types";

class API {
  private base;
  constructor() {
    this.base = axios.create({
      baseURL: `https://api.themoviedb.org/3/`,
    });
  }

  public async getData(search: string, page: number): Promise<IData> {
    let response;
    if (search) {
      response = await this.base.get<IData>(`/search/movie?api_key=a5a206f233ebfed8f2b30f9da1307115&query=${search}&page=${page}`);
    }
    else {
      response = await this.base.get<IData>(`/discover/movie?api_key=a5a206f233ebfed8f2b30f9da1307115&sort_by=popularity.desc&page=${page}`);
    }
    return response.data;
  }
}

const api = new API();
export default api;
