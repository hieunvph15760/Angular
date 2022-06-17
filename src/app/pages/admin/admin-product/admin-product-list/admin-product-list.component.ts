import { CategoriesService } from 'src/app/services/categories.service';
import { TypeCategories } from './../../../../types/Categories';
import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/Product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
  categories: TypeCategories[]
  constructor(
    private ProductService:ProductService,
    private CategoriesService: CategoriesService,
    private toastr: ToastrService
    ) {
    this.products = []
    this.categories = []
   }

  onGetList(){
    this.ProductService.getProducts().subscribe((data) =>{
      this.products = data;
    })
    this.CategoriesService.getCategories().subscribe(data =>{
      this.categories = data;
    })
  }

  ngOnInit(): void {
    this.onGetList();
  }


  onDelete(_id:string){
      const cofirmDelete = confirm("Bạn có muốn xóa không ?");
      if(cofirmDelete && _id){
          this.ProductService.removeProduct(_id).subscribe((data)=>{
            this.toastr.success("Xóa thành công !")
            this.onGetList();
          })          
      }
  }

  updateSatus(id:string,newStatus:number){
    this.ProductService.editProductStatus(id, {status:newStatus}).subscribe(data =>{
      this.onGetList();
    })
  }
}
