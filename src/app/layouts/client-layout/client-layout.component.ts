import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
 
  user:any

  constructor(private router:Router) { 
      
  }

  ngOnInit(): void {
    if(localStorage.getItem('user') || ""){
      this.user = JSON.parse(localStorage.getItem('user') || "");
    }
  }
  
  logOut(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('/auth/login');
  }
  
}
