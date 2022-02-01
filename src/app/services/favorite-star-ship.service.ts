import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteStarShipService {

  favoriteStarShips: any[] = []
  constructor() { }

  getFavoriteStarShips(): any{
    return this.favoriteStarShips
  }
  setFavoriteStarShips(data: any){
    this.favoriteStarShips.push(data)
  }

}
