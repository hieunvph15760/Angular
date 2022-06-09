import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  user:any
  constructor() { }

  ngOnInit(): void {
    // Lấy user
    if(localStorage.getItem('user') || ""){
      this.user = JSON.parse(localStorage.getItem('user') || "");
      console.log(this.user.user.name);
      
    }
  }

}
