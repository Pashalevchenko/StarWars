import { Component, EventEmitter, OnInit } from '@angular/core';
import { FavoriteStarShipService } from 'src/app/services/favorite-star-ship.service';
import { StarShipService } from 'src/app/services/star-ship.service';

@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html',
  styleUrls: ['./star-ships.component.css']
})
export class StarShipsComponent implements OnInit {

  starShips: any;
  private currentPage: number = 1;
  // private isLoading: boolean = false;
  // private favoriteStarShips: any[] = [];
  isInFavorite: boolean = false;
  
  
  constructor(private starShipService: StarShipService, 
              private favoriteStarShipService: FavoriteStarShipService) { 
    this.starShipService = starShipService;
    // this.favoriteStarShips = this.favoriteStarShipService.originalFavoriteStarShips
    
    
  }

  onFechPost(url?: string){
    this.starShipService.getStarShips(url).subscribe(value => {
      this.starShips = value;
    })
  
  }

  
  pageValidation(){
    if(this.currentPage > 4 && this.currentPage < 0){
      throw new Error;
    }
  }
  ngOnInit(): void {
    this.onFechPost();
    
  }
  
  back(){
    this.onFechPost(this.starShips.previous);
  }
  next(){
    this.onFechPost(this.starShips.next);
  }
 
  favStarShip(favoriteStarShip: any){
    this.favoriteStarShipService.favoriteStarShips = favoriteStarShip;
  }
}

