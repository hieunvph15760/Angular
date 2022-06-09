import { LocalStorageService } from './../../services/local-storage.service';
import { TypeCart } from './../../types/cart';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
  
  cartItems:TypeCart[] = []
  cartItemValues: number = 0;
  user:any

  constructor(
    private router:Router,
    private localstorage:LocalStorageService
    ) { 
      
  }

  ngOnInit(): void {
    // Lấy user
    if(localStorage.getItem('user') || ""){
      this.user = JSON.parse(localStorage.getItem('user') || "");
    }

    // Cập nhật giỏ hàng
    this.localstorage.watchService().subscribe(data =>{
      this.onSetCartItems();
    })

    // Lấy số lượng trên giỏ hàng
    this.onSetCartItems();
    
  }
  
  logOut(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('/auth/login');
  }

  onSetCartItems(){
    this.cartItems = this.localstorage.getItem();
    this.cartItemValues = 0;
    this.cartItems.forEach(item =>{
      this.cartItemValues += item.quantity
    })
  }
  
}
