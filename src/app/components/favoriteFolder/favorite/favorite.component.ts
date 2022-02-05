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
  private subscription: Subscription = new Subscription;
  constructor(private favoriteStarShip: FavoriteStarShipService) { 
 
  }
 
  ngOnInit(): void {
    this.showPage();
    this.subscription = this.favoriteStarShip.starShipWasDelited.subscribe(() =>{
      this.showPage();
    })
    
  }

  private showPage(){
    this.favorite = this.favoriteStarShip.favoriteStarShips
    
  }

  next(){
    this.favoriteStarShip.currentPageValue += 1
    this.showPage()
  }
  back(){
    this.favoriteStarShip.currentPageValue -= 1
    this.showPage()
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
