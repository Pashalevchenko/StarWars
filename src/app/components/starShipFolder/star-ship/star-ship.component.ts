import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteStarShipService } from 'src/app/services/favorite-star-ship.service';

@Component({
  selector: 'app-star-ship',
  templateUrl: './star-ship.component.html',
  styleUrls: ['./star-ship.component.css'],
  // providers: [FavoriteStarShipService]
})
export class StarShipComponent implements OnInit {

  @Input() starShip: any;
  constructor(private router: Router, private favoriteStarShipService: FavoriteStarShipService) { }

  ngOnInit(): void {
  }

  starShipDetail(){
    this.router.navigate(['starships', this.urlValidation()], {state: this.starShip})
  }

  urlValidation(){
    return this.starShip.name.split(" ").join("_")
  }

  addToFavorite(){
    const starShipArr = this.favoriteStarShipService.getFavoriteStarShips();
    
    for (const starShip of starShipArr) {
      if(starShip.name === this.starShip.name) return
    }
    this.favoriteStarShipService.setFavoriteStarShips(this.starShip)

  }
}
