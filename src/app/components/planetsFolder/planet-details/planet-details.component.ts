import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

  planet: any;

  constructor(private router: Router) {
    this.planet = this.router.getCurrentNavigation()?.extras.state
    // this.planet = this.router.getCurrentNavigation()?.extras.state as Type!!!!!
   }

  ngOnInit(): void {
  }

  getFullYear(data: string){
    return new Date(data).getFullYear()
  }


}
