import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteStarShipService {

  private _favoriteStarShips: any[] = []
  constructor() { }

  get favoriteStarShips(): any{
    return this._favoriteStarShips
  }
  set favoriteStarShips(data: any){
    for (const _favoriteStarShip of this._favoriteStarShips) {
      if(_favoriteStarShip.name === data.name) return
    }
    this._favoriteStarShips.push(data)
  }

}