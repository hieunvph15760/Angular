import { OrderService } from './../../../services/order.service';
import { typeOrderDetails } from './../../../types/cart';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent implements OnInit {
  orderDetails: typeOrderDetails[]
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private OrderService:OrderService
    ) {
    this.orderDetails = []
   }

  ngOnInit(): void {
    const idProduct = this.ActivatedRoute.snapshot.params['_id'];
    if(idProduct){
      this.OrderService.getOrderDetails(idProduct).subscribe(data =>{
          this.orderDetails = data;
      })
    }
  }

}
