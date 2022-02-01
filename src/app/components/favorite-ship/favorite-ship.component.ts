import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-ship',
  templateUrl: './favorite-ship.component.html',
  styleUrls: ['./favorite-ship.component.css']
})
export class FavoriteShipComponent implements OnInit {

  constructor() { }
  @Input() favoriteShip: any

  ngOnInit(): void {
  }

  test(){

  }
}
