import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  private currentPage: number = 1;
  planets: any;
  isLoading: any;
  constructor(private plantesService: PlanetsService ) {
    this.onFechPost()
  }



  onFechPost() {
    this.isLoading = true;
    new Promise((resolve) => {
      resolve(this.plantesService.getPlanets(this.currentPage).subscribe(planets => {
        this.planets = planets
      }))
    }).finally(() => {
      this.isLoading = false;
    }).catch(err=>{
      console.log(err)
    })
  }
  ngOnInit(): void {
  }

  back() {
    this.currentPage -= 1;
    this.onFechPost()
    console.log(this.currentPage)

  }

  next() {
    this.currentPage += 1;
    this.onFechPost()
    console.log(this.currentPage)

  }
}
