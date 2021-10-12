/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IReactionDisposer, makeAutoObservable, reaction, runInAction } from 'mobx';
import { IData, IMostWanted } from '../types';
import api from './API';


class Store {
  public data: IData;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  // public page: number = 1;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public search: string = "";
  public mostWanted: IMostWanted[] = [];

  public searchDisposer: IReactionDisposer;


  constructor() {
    makeAutoObservable(this);
    this.fetch();
    this.searchDisposer = reaction(() => this.search, () => this.fetch(this.search));
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public addMostWanted(search: string) {
    const itemExists = this.mostWanted.find(item => item.name === search);
    if (itemExists) {
      itemExists.quantity++;
    }
    else if (!itemExists && search !== "") {
      this.mostWanted.push({
        name: search,
        quantity: 1,
      });
    }
  }

  public get mostWantedOrderned() {
    return this.mostWanted
      .slice()
      .sort((itemA, itemB) => itemB.quantity - itemA.quantity)
      .slice(0, 10);
  }

  public setData(data: IData) {
    this.data = data;
  }

  public setSearch(search: string): void {
    this.search = search;
  }

  // public setPage(page: number) {
  //   this.page = page;
  // }


  public fetch = async (search: string = this.search) => {
    try {
      this.addMostWanted(search);
      this.setSearch(search);
      // this.setPage(page);

      const data = await api.getData(this.search);
      this.setData(data);
    }
    catch (err) {
      console.error(err);
    }
    finally {
      runInAction(() => {
        console.log(this.mostWantedOrderned);
      });
    }
  }

  public disposer() {
    this.searchDisposer();
  }
}

export default Store;
