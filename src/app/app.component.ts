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

  constructor(private router: Router){
 
  }




  
}
