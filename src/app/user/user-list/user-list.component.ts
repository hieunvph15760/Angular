import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() user:any;
  @Output() handleDelete: EventEmitter<number>;
  @Output() handleEdit: EventEmitter<number>;

  constructor() {
    this.handleDelete = new EventEmitter();
    this.handleEdit = new EventEmitter();
  }
  
  inputValues = {
    id:0,
    name:'',
    age:0,
    email:'',
    phone:'',
    avatar:''
  }

  ngOnInit(): void {
  }

  remove(id:number){
     this.handleDelete.emit(id);
  }

  onEdit(id:number){
    this.handleEdit.emit(id);
  }

}
