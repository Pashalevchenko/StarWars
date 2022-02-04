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
  @Output() favoriteStarship = new EventEmitter
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  starShipDetail(){
    this.router.navigate(['starships', this.urlValidation()], {state: this.starShip});
  }

  urlValidation(){
    return this.starShip.name.split(" ").join("_");
  }

  addToFavorite(){
    this.favoriteStarship.emit(this.starShip);
  }
}
