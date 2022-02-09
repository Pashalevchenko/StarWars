import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidentService } from 'src/app/services/resident.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

  planet: any;
  // Array of string 
  residents: any[] = [] 
 
  constructor(private router: Router, private residentService: ResidentService) {
    this.planet = this.router.getCurrentNavigation()?.extras.state
    // this.planet = this.router.getCurrentNavigation()?.extras.state as Type!!!!!
    for (const residentUrl of this.planet.residents) {
      this.residentService.getResident(residentUrl).subscribe(resident => {
        this.residents.push(resident)
      })
    }
    console.log(this.residents)
   }

  ngOnInit(): void {
  }

  getFullYear(data: string){
    return new Date(data).getFullYear()
  }
 

}
