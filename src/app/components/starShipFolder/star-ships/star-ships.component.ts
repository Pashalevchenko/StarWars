import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import starShipModel from 'src/app/models/starShip';
import { FavoriteStarShipService } from 'src/app/services/favorite-star-ship.service';
import { StarShipService } from 'src/app/services/star-ship.service';

@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html',
  styleUrls: ['./star-ships.component.css']
})
export class StarShipsComponent implements OnInit, OnDestroy {

  starShips: any;
  private currentPage: number = 1;
  // private isLoading: boolean = false;
  // private favoriteStarShips: any[] = [];
  isInFavorite: boolean = false;
  // private favoritToDestroy!: Subscription
  
  
  constructor(private starShipService: StarShipService, 
              private favoriteStarShipService: FavoriteStarShipService) { 
    this.starShipService = starShipService;
    // this.favoriteStarShips = this.favoriteStarShipService.originalFavoriteStarShips
    
    
    
  }

  onFechPost(url?: string){
    this.starShipService.getStarShips(url).subscribe(value => {
      this.starShips = value;
      console.log(this.starShips)
    })
  
  }
ngOnDestroy(): void {
    console.log("destroy")
}
  
  pageValidation(){
    if(this.currentPage > 4 && this.currentPage < 0){
      throw new Error;
    }
  }
  ngOnInit(): void {
    this.onFechPost();
    console.log(this.starShips)
  }
  
  back(){
    this.onFechPost(this.starShips.previous);
  }
  next(){
    this.onFechPost(this.starShips.next);
  }
 
  favStarShip(favoriteStarShip: starShipModel){
    this.favoriteStarShipService.favoriteStarShips = favoriteStarShip;
  }
}

