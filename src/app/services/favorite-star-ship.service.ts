import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteStarShipService {

  starShipWasDelited = new Subject<any[]>()

  private _favoriteStarShips: any[] = [];
  // favoriteToShow: any[] = []
  private currentPage: number = 1;
  private shipsToDisplay: number = 5;
  private startValue = 0;
  private endvalue = 0;
  // activateEmmiter = new EventEmitter();
 
  constructor() { 
    
  }

  get favoriteStarShips(): any{
    this.endvalue = this.currentPage * this.shipsToDisplay;
    this.startValue = (this.currentPage - 1) * this.shipsToDisplay;
    return this._favoriteStarShips.slice(this.startValue, this.endvalue);
  }
  set favoriteStarShips(data: any){
    for (const _favoriteStarShip of this._favoriteStarShips) {
      if(_favoriteStarShip.name === data.name) return;
    }
    this._favoriteStarShips.push(data);
  }

  set currentPageValue(currentPage: number){
    this.currentPage = currentPage;
  }
  get currentPageValue(){
    return this.currentPage;
  }


  deliteStarShip(starShipToDelite: any){
    const delitedShip = this._favoriteStarShips.findIndex(starShip => starShip === starShipToDelite);
    this._favoriteStarShips.splice(delitedShip, 1);
    this.starShipWasDelited.next(this._favoriteStarShips.slice());
  }

}