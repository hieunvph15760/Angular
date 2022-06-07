import { CategoriesService } from './../../../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { TypeCategories } from 'src/app/types/Categories';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  Categories: TypeCategories[];
  constructor(private CategoriesService:CategoriesService) {
    this.Categories = []
  }

  onGetList(){
    this.CategoriesService.getCategories().subscribe(data =>{
        this.Categories = data;
    })
  }
  
  ngOnInit(): void {
    this.onGetList();
  }

  onRemove(_id:string){
      const confirmRemove = window.confirm("Bạn có muốn xóa không ?");
      if(confirmRemove && _id){
        this.CategoriesService.removeCategory(_id).subscribe(data =>{
          this.onGetList();
        })
      }
  }

}
