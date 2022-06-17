import { OrderService } from './../../../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { typeOrderDetails } from 'src/app/types/cart';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  order:FormGroup
  cart:typeOrderDetails[]
  totalMoney:number
  constructor(
    private toastr:ToastrService,
    private OrderService:OrderService
    ) { 
      this.order = new FormGroup({
        lastname: new FormControl('',Validators.required),
        name: new FormControl('',Validators.required),
        email: new FormControl('',Validators.required),
        address: new FormControl('',Validators.required),
        note: new FormControl('',Validators.required),
        phone: new FormControl('',Validators.required),
      })
      this.cart = []
      this.totalMoney = 0
  }
  
  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    if(localStorage.getItem("cart") && localStorage.getItem("totalMoney")){
      this.cart = JSON.parse(localStorage.getItem("cart") || "");
      this.totalMoney = JSON.parse(localStorage.getItem("totalMoney") || "");
    }
  }

  onSubmit(){
    const data = this.order.value;
    let orderDetails;
    this.OrderService.createOrder(data).subscribe(data =>{
        this.cart.forEach(item =>{
          orderDetails = {
                name:item.name,
                image:item.image,
                price:item.price,
                quantity:item.quantity,
                sale_price:item.sale_price,
                total: item.quantity * (item.price - (item.price * item.sale_price / 100)),
                order:data._id
          }
          this.OrderService.createOrderDetails(orderDetails).subscribe(data =>{
              
          })
        })
        localStorage.removeItem('cart');  
        this.cart = [];
        this.totalMoney = 0;
        this.toastr.success("Mua hàng thành công, cảm ơn bạn !");
        this.order.reset();
    })
  }
}
