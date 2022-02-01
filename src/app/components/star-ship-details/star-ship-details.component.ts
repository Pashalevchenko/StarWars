import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { routes } from 'src/app/routes/basic.routes';

@Component({
  selector: 'app-star-ship-details',
  templateUrl: './star-ship-details.component.html',
  styleUrls: ['./star-ship-details.component.css']
})
export class StarShipDetailsComponent implements OnInit {


  starShip: any
  constructor(private router: Router) { 
    this.starShip = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
  }

  getFullYear(data: string){
    return new Date(data).getFullYear()
  }

}
