import { Directive } from '@angular/core';
import { FavoriteStarShipService } from 'src/app/services/favorite-star-ship.service';

@Directive({
  selector: '[appStarShipDirective]'
})
export class StarShipDirectiveDirective {

  constructor(private favoriteStarShipService: FavoriteStarShipService) { }

  set buttonColor(ship: any){
    
    for (const starShip of this.favoriteStarShipService.originalFavoriteStarShips) {
      if(starShip === ship){

      }
    }
  }
}
