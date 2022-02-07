import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FavoriteStarShipService } from './favorite-star-ship.service';

@Injectable({
  providedIn: 'root'
})
export class SetFavoriteStarShipService {

  private isFavorite: boolean = false
  private buttonText: string = "Add to favorite"
  isFavoriteSubject = new Subject();


  constructor(private favoriteStarShipService: FavoriteStarShipService) {
    
   }

  set isInFavoriteList(inFavList: boolean){
    this.isFavorite = inFavList
    
  }
  get isInFavoriteList(){
    return this.isFavorite
  }
  set textForButton(text:string){
    this.buttonText = text
  }

  get textForButton(){
    return this.buttonText
  }


  sortByFavorite(starShip: any){
    for (const favStarShip of this.favoriteStarShipService.originalFavoriteStarShips) {
      if(favStarShip.name === starShip.name){
        this.isFavorite = true;
        this.buttonText = "In favorite list"
        return
      }
      if(this.isFavorite){
        this.isFavorite = false;
        this.buttonText = "Add to favorite"
      }
      
    }
  }

  
}
