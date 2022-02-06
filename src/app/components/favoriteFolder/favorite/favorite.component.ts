import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { FavoriteStarShipService } from 'src/app/services/favorite-star-ship.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // providers: [FavoriteStarShipService]
})
export class FavoriteComponent implements OnInit, OnDestroy {

  favorite: any[] = [];
  originalFavorite = this.favoriteStarShipService.originalFavoriteStarShips
  private subscription: Subscription = new Subscription;
  constructor(private favoriteStarShipService: FavoriteStarShipService) { 
    
  }
 
  ngOnInit(): void {
    this.showPage();
    this.subscription = this.favoriteStarShipService.starShipWasChenged.subscribe(() =>{
      this.showPage();
    }) 
    
  }

  private showPage(){
    this.favorite = this.favoriteStarShipService.favoriteStarShips
  }

  next(){
    this.favoriteStarShipService.currentPageValue += 1
  }
  back(){
    this.favoriteStarShipService.currentPageValue -= 1
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  displayItemChange(val: any){
    this.favoriteStarShipService.shipsToDisplayNumber = +val.target.value
  }
}
