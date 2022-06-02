import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product: Product
  constructor(
    private ProductService:ProductService,
    private activateRoute: ActivatedRoute
    ) {
      this.product = {
        _id:'',
        name:'',
        price:0,
        image:''
      }
     }

  ngOnInit(): void {
    const idFormUrl = this.activateRoute.snapshot.params['_id'];
    this.ProductService.getProduct(idFormUrl).subscribe((data)=>{
        this.product = data;
    })
  }

}
