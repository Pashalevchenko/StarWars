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
  isLoading: any = true;
  constructor(private plantesService: PlanetsService ) {
    this.onFechPost()
  }



  onFechPost() {
    new Promise((resolve) => {
      this.plantesService.getPlanets(this.currentPage).subscribe(planets => {
        this.planets = planets
        resolve(this.isLoading = false)
      })
    }).catch(err=>{
      console.log(err)
    })
  }
  ngOnInit(): void {
  }

  back() {
    if(this.currentPage < 0) return
    this.currentPage -= 1;
    this.onFechPost()
    console.log(this.currentPage)

  }

  next() {
    if(this.currentPage > 6) return
    this.currentPage += 1;
    this.onFechPost()
    console.log(this.currentPage)

  }
}
