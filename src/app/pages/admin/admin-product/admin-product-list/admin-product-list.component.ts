import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
  constructor(private ProductService:ProductService) {
    this.products = []
   }

  onGetList(){
    this.ProductService.getProducts().subscribe((data) =>{
      this.products = data;
    })
  }

  ngOnInit(): void {
    this.onGetList();
  }


  onDelete(_id:string){
      const cofirmDelete = confirm("Bạn có muốn xóa không ?");
      if(cofirmDelete && _id){
          this.ProductService.removeProduct(_id).subscribe((data)=>{
            this.onGetList();
          })          
      }
  }

}
