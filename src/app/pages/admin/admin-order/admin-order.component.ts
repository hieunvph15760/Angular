import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/types/cart';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {
  order:order[]
  constructor(private OrderService:OrderService) {
    this.order = [];
   }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(){
    this.OrderService.getOrder().subscribe(data =>{
      this.order = data
    })
  }

}
