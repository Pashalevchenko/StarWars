import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  constructor(private router: Router) {


   }
  
  @Input() planet: any;
  

  ngOnInit(): void {
  }
  // planetName = this.planet.name.split(" ").join("_")

  planetDetail(){
    this.router.navigate(['planets', this.urlValidation()], {state: this.planet})
  }

  urlValidation(){
    return this.planet.name.split(" ").join("_")
  }
}
