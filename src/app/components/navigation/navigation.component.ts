import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    
  }

  logOut(){
    localStorage.removeItem("isLogin")
    this.router.navigate(['/login']);
    
  }
}
