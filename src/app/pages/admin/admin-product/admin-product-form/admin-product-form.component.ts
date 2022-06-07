import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TypeCategories } from 'src/app/types/Categories';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  listCategories: TypeCategories[]
  productId: string
  constructor(
    private ProductService: ProductService,
    private router: Router,
    private CategoriesService:CategoriesService,
    private ActivatedRoute: ActivatedRoute // Lấy các tham số trên url
    ) {
    this.productForm = new FormGroup({
        name: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          // this.onValidateNameHasProduct
        ]),
        price: new FormControl(0,Validators.required),
        image: new FormControl('',Validators.required),
        sale_price: new FormControl(0, Validators.required),
        description: new FormControl('', Validators.required),
        status: new FormControl(0, Validators.required),
        category: new FormControl('', Validators.required),
    })
    this.productId = '';
    this.listCategories = [];
  }

  ngOnInit(): void {
    this.productId = this.ActivatedRoute.snapshot.params['_id'];
    if(this.productId){
      this.ProductService.getProduct(this.productId).subscribe(data =>{
        // Cập nhật data cho form bằng patchValue
        this.productForm.patchValue(data)
      })
    }
    this.CategoriesService.getCategories().subscribe(data =>{
        this.listCategories = data;
    })
  }

  // onValidateNameHasProduct(control: AbstractControl): ValidationErrors|null{
  //   const inputValue = control.value;
  //   if(!inputValue.includes('Sách')){
  //     return {hasProductError:true}
  //   }
  //   return null;
  // }

  // Hàm trở về
  redireactTolist(){
    this.router.navigateByUrl("/admin/products");
  }

  onSubmit(){
    const data = this.productForm.value;

    if(this.productId !== '' && this.productId !== undefined){
      return this.ProductService.editProduct(this.productId, data).subscribe(data =>{
        this.redireactTolist();
      })
    }

    return this.ProductService.createProduct(data).subscribe(data =>{
        this.redireactTolist();
    })
  }

}
