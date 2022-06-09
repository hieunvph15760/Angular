import { CategoriesService } from './../../../services/categories.service';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { TypeCategories } from 'src/app/types/Categories';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProducts: Product[]
  listCategories: TypeCategories[]
  constructor(
      private ProductService:ProductService,
      private CategoriesService:CategoriesService
  ) {
      this.listProducts = []
      this.listCategories = []
   }

  onGetList(){
    this.CategoriesService.getCategories().subscribe(data =>{
        this.listCategories = data;
    })
    this.ProductService.getProducts().subscribe(data =>{
      this.listProducts = data;
  })
  }

  ngOnInit(): void {
      this.onGetList();
  }

  listCategoryDetails(_id:string){
      this.CategoriesService.getCategoriesDetails(_id).subscribe(data =>{
        this.listProducts = data;
      })
  }

  limitBooks(amount:number){
      this.ProductService.litmitBooks(amount).subscribe(data =>{
          this.listProducts = data
      })
  }

  sortBooks(data:string){
      this.ProductService.sortBooks(data).subscribe(data =>{
        this.listProducts = data;
      })
  }
  
  inputSearch(event:any){
      this.ProductService.searchBooks(event.target.value).subscribe(data =>{
        this.listProducts = data;
      })
  }

}
