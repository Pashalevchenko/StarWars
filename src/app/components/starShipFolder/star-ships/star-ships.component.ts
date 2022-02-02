import { Component, EventEmitter, OnInit } from '@angular/core';
import { StarShipService } from 'src/app/services/star-ship.service';

@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html',
  styleUrls: ['./star-ships.component.css']
})
export class StarShipsComponent implements OnInit {

  starShips: any;
  private currentPage: number = 1;
  favorite: any = [];
  isLoading: boolean = false;
  
  constructor(private starShipService: StarShipService) { 
    this.starShipService = starShipService;
    this.onFechPost();
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
    
  }
  
  back(){
    this.onFechPost(this.starShips.previous)
  }
  next(){
    this.onFechPost(this.starShips.next)
  }
  selectedFavorite(val: any){
    this.favorite.push(val)
  }

}

