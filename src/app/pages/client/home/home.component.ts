import { CategoriesService } from './../../../services/categories.service';
import { TypeCategories} from './../../../types/Categories';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/Product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[]
  categories: TypeCategories[]
  constructor(
    private ProductService:ProductService,
    private CategoriesService:CategoriesService
    ) { 
    this.products = [];
    this.categories = [];
  }

  onGetList(){
    // Lấy sản phẩm
    this.ProductService.getProducts().subscribe((data) =>{
      this.products = data.filter(item => item.status === 1)
    })
    
    // Lấy danh mục
    this.CategoriesService.getCategories().subscribe(data =>{
      this.categories = data.filter(item => item.status === 1);
    })
  }

  ngOnInit(): void {
    this.onGetList();
  }

  listCategoriesDetails(_id:string){    
      this.CategoriesService.getCategoriesDetails(_id).subscribe(data =>{
        this.products = data
    })
  }

  // Lấy tất cả sản phẩm
  allProducts(){
    this.onGetList();
  }

  // nextPagination(pagination:number){
  //   this.ProductService.pagination(pagination).subscribe(data =>{
  //     this.products = data
  //   })
  // }
}
