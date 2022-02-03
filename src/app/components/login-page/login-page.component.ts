import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  user = {
    name: "",
    password: ""
  }
  isSubbmit = false;
  @Output() submitStatus = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  saveInput(){
    this.isSubbmit = true;
    this.submitStatus.emit(this.isSubbmit)
  }

}
