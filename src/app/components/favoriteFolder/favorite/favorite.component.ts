import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, Subject } from 'rxjs';
import { FavoriteStarShipService } from 'src/app/services/favorite-star-ship.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // providers: [FavoriteStarShipService]
})
export class FavoriteComponent implements OnInit {

  favorite: any[] = [];
  favoriteToShow: any[] = []
  currentPage: number = 1;
  shipsToDisplay: number = 5;
  startValue = 0;
  endvalue = 0;

  constructor(private favoriteStarShip: FavoriteStarShipService, private route: ActivatedRoute) { 
    // this.favorite = this.favoriteStarShip.favoriteStarShips;
    
  }
  private refresh = new Subject<any>();

  ngOnInit(): void {
    interval(1000).subscribe(count =>{
      // console.log(count)
    })
    const observ = Observable.create((observer: any) =>{
      observer.next(this.favoriteToShow)
      this.favoriteStarShip.favoriteStarShips
    })
    this.showPage();

    observ.subscribe((data: any) =>{
      console.log(data)
      this.showPage();
    })
    console.log("hi")
     
  }

  private showPage(){
    this.endvalue = this.currentPage * this.shipsToDisplay;
    this.startValue = (this.currentPage - 1) * this.shipsToDisplay;
    this.favorite = this.favoriteStarShip.favoriteStarShips;
    this.favoriteToShow = this.favorite.slice(this.startValue, this.endvalue)
  }

  next(){
    this.currentPage += 1;
    this.showPage()
  }
  back(){
    this.currentPage -= 1;
    this.showPage()
  }
}
