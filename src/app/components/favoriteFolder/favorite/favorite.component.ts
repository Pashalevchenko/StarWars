import { Component, OnInit } from '@angular/core';
import { FavoriteStarShipService } from 'src/app/services/favorite-star-ship.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // providers: [FavoriteStarShipService]
})
export class FavoriteComponent implements OnInit {

  favorite: any[] = []

  constructor(private favoriteStarShip: FavoriteStarShipService) { 
    this.favorite = this.favoriteStarShip.getFavoriteStarShips();
    
  }

  ngOnInit(): void {
     
  }

  shipToDelite(val: any){
    let delitedShip = this.favorite.findIndex((statShip) => statShip === val);
    this.favorite.splice(delitedShip, 1)
  }

}
