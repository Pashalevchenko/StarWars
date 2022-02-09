import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import starShipModel from '../models/starShip';
import { StarShipService } from './star-ship.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteStarShipService {

  starShipWasChenged = new Subject();
  favoritListWasChanged = new Subject();

  private _favoriteStarShips: starShipModel[] = [];
  private currentPage: number = 1;
  private shipsToDisplay: number = 5;
  private startValue = 0;
  private endvalue = 0;

  constructor() { }

  set shipsToDisplayNumber(number: number){
    this.shipsToDisplay = number;
    this.starShipWasChenged.next(this.shipsToDisplay)
  }
  get originalFavoriteStarShips(){
    return this._favoriteStarShips;
  }
  get shipsToDisplayPages(){
    return this.shipsToDisplay
  }

  get favoriteStarShips(): any{
    this.endvalue = this.currentPage * this.shipsToDisplay;
    this.startValue = (this.currentPage - 1) * this.shipsToDisplay;
    return this._favoriteStarShips.slice(this.startValue, this.endvalue);
  }

  set favoriteStarShips(data: starShipModel){
    for (const _favoriteStarShip of this._favoriteStarShips) {
      if(_favoriteStarShip.name === data.name) return;
    }
    this._favoriteStarShips.push(data);
    this.favoritListWasChanged.next(this._favoriteStarShips)
  }

  set currentPageValue(currentPage: number){
    this.currentPage = currentPage;
    this.starShipWasChenged.next(this.currentPage)
  }

  get currentPageValue(){
    return this.currentPage;
  }

  deliteStarShip(starShipToDelite: starShipModel){
    const delitedShip = this._favoriteStarShips.findIndex(starShip => starShip.name === starShipToDelite.name);
    this._favoriteStarShips.splice(delitedShip, 1);
    this.starShipWasChenged.next(this._favoriteStarShips.slice());
    this.favoritListWasChanged.next(this._favoriteStarShips)
  }

 

}