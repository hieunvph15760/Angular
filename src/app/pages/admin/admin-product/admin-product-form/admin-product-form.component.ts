import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private ProductService: ProductService,
    private router: Router
    ) {
    this.productForm = new FormGroup({
        name: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]),
        price: new FormControl(0,Validators.required),
        image: new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const data = this.productForm.value;
    this.ProductService.createProduct(data).subscribe(data =>{
        this.router.navigate(['/admin','products']);
    })
  }

}
