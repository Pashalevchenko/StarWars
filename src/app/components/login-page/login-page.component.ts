import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // localStorage.setItem("isLogin", "true")
    // this.router.navigate(["/"])
  }

}
