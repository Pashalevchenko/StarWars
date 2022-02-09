import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { FavoriteStarShipService } from './favorite-star-ship.service';

@Injectable({
  providedIn: 'root'
})
export class SetFavoriteStarShipService {

  private isFavorite: boolean = false
  private buttonText: string
  isFavoriteSubject = new Subject();


  constructor(private favoriteStarShipService: FavoriteStarShipService, private translateService: TranslateService) {
    this.buttonText = this.translateService.instant('starShip.buttons.addToFav');
   }

  set isInFavoriteList(inFavList: boolean){
    this.isFavorite = inFavList;
    
  }
  get isInFavoriteList(){
    return this.isFavorite;
  }
  set textForButton(text:string){
    this.buttonText = text;
  }

  get textForButton(){
    return this.buttonText;
  }
  sortForLeng(){
    
    if(this.isFavorite){
      return this.buttonText = this.translateService.instant('starShip.buttons.removeFromFav')
    }else if(!this.isFavorite){
      return this.buttonText = this.translateService.instant('starShip.buttons.addToFav'); 
    }
  }


  sortByFavorite(starShip: any){
    for (const favStarShip of this.favoriteStarShipService.originalFavoriteStarShips) {
      if(starShip.name === favStarShip.name){
        // (starShip.name === favStarShip.name)
        this.isFavorite = true;
        this.buttonText = this.translateService.instant('starShip.buttons.removeFromFav')
        
      }
      if(favStarShip.name != starShip.name){
        this.isFavorite = false;
        this.buttonText = this.translateService.instant('starShip.buttons.addToFav'); 
      }
      
    }
  }

  
}
