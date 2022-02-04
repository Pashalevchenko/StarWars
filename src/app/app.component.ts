import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { StarShipService } from './services/star-ship.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submitFormStatus = localStorage.getItem("isLogin")
  // private refresh = new Subject()
  
  constructor(private router: Router){
  //  if(!this.submitFormStatus){
  //   this.router.navigate(["/login"])
  //  }
   console.log("hello")
  }




  
}
