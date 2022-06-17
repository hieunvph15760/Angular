import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from './../../../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  CategoryForm: FormGroup
  CategoryId: string

  constructor(
    private CategoriesService:CategoriesService,
    private Router:Router,
    private ActivatedRoute:ActivatedRoute,
    private toastr:ToastrService
  ) {
      this.CategoryForm = new FormGroup({
        name: new FormControl('', [
          Validators.required
        ]),
      })
    this.CategoryId = ''
   }

  ngOnInit(): void {
    this.CategoryId = this.ActivatedRoute.snapshot.params['_id'];
    if(this.CategoryId){
        this.CategoriesService.getCategory(this.CategoryId).subscribe(data =>{
          console.log(data);
          this.CategoryForm.patchValue({
              name:data.name,
              status:data.status
          });
        })
    }
  }

  redireactTolist(){
    this.Router.navigateByUrl("/admin/categories");
  }

  onSubmit(){
    const data = this.CategoryForm.value;

    if(this.CategoryId !== "" && this.CategoryId !== undefined){
      return this.CategoriesService.editCategory(this.CategoryId,data).subscribe(data =>{
        this.redireactTolist();
        this.toastr.success("Sửa thành công !")
      })
    }

    return this.CategoriesService.createCategory(data).subscribe(data =>{
        this.redireactTolist();
        this.toastr.success("Thêm thành công !")
    })
  }

}
