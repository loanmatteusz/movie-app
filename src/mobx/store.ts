import { makeAutoObservable, runInAction } from 'mobx';
import { IData } from '../types';
import api from './API';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  public data: IData;
  public page: number = 1;
  public search: string = "";


  public setData(data: IData) {
    this.data = data;
  }

  public setSearch(search: string): void {
    this.search = search;
  }

  public setPage(page: number) {
    this.page = page;
  }


  public fetch = async (search: string=this.search, page: number=this.page) => {
  try {
    this.setSearch(search);
    this.setPage(page)

    const data = await api.getData(this.search, this.page);
    this.setData(data);
  }
  catch (err) {
    console.error(err);
  }
  finally {
    runInAction(() => {
      console.log('Tudo Nice! :D');
    });
  }
}
}

export default Store;
