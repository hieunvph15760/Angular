import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/Product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product
  constructor(
    private ProductService:ProductService,
    private ActivatedRoute:ActivatedRoute
  ) {
    this.product = {
      _id:'',
      name:'',
      price:0,
      image:'',
      sale_price:0,
      description:'',
      status:0,
      category:''
    }
   }

  ngOnInit(): void {
    const idUrl = this.ActivatedRoute.snapshot.params['_id'];
    this.ProductService.getProduct(idUrl).subscribe(data =>{
      this.product = data;
    })
  }

}
