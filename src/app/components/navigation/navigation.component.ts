import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }
  refreshPage = new BehaviorSubject<boolean>(true)

  ngOnInit(): void {
    this.refreshPage.subscribe(l => console.log(l))
    console.log("vot i ya")
  }

  logOut(){
    localStorage.removeItem("isLogin")
    
  }
}
