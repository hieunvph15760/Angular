import { ToastrService } from 'ngx-toastr';
import { TypeCart } from './../../../types/cart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:TypeCart[]
  toltalMoney:number;
  tongTien:number;
  constructor(
    private toastr:ToastrService
    ) { 
    this.cart = []
    this.toltalMoney = 0
    this.tongTien = 0
  }

  getCart(){}

  ngOnInit(): void {
    // Lấy giỏ hàng
    if(JSON.parse(localStorage.getItem("cart") || "[]")){
      this.cart = JSON.parse(localStorage.getItem("cart") || "[]")
    }

    // Tính tổng tiền phải trả
    this.cart.forEach((item)=>{
        this.toltalMoney += item.quantity * (item.price - (item.price * item.sale_price / 100))
    })
  }

  // Tăng số lượng
  increasing(_id:string){
    this.cart.forEach((item) =>{
        if(item._id === _id){
            item.quantity +=1;
            localStorage.setItem('cart', JSON.stringify(this.cart));
        }
    });
   
  }

  // Giảm số lượng
  reduce(_id:string){
    this.cart.forEach((item) =>{
      if(item._id === _id){
          item.quantity -=1;
          if(item.quantity < 1){
              item.quantity = 1;
          }
          localStorage.setItem('cart', JSON.stringify(this.cart));
      }
  });
  }

  removeCart(_id:string){
    this.cart = this.cart.filter(item => item._id !== _id);
    localStorage.setItem('cart', JSON.stringify(this.cart));    
    this.toastr.success("Xóa sản phẩm thành công !")
  }

}
