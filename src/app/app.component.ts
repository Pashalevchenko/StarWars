import { Component } from '@angular/core';
import { StarShipService } from './services/star-ship.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submitFormStatus: boolean = false;
  constructor(){
   
  }

  submitStatus(isFormSubmit: boolean){
    this.submitFormStatus = isFormSubmit;
  }
  
}
