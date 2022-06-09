import { ToastrService } from 'ngx-toastr';
import { TypeUsers } from './../../../../types/users';
import { UsersService } from './../../../../services/users.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsers: TypeUsers[]
  constructor(
      private router:Router,
      private UsersService:UsersService,
      private toastr:ToastrService
  ) { 
    this.listUsers = [];
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.UsersService.getUsers().subscribe(data =>{
        this.listUsers = data;
        console.log(this.listUsers);
    })
  }

  onDelete(_id:string){
    const confirmRemove = window.confirm("Bạn có muốn xóa không ?");
    if(confirmRemove && _id){
      this.UsersService.removeUser(_id).subscribe(data =>{
        this.toastr.success("Xóa thành công !");
        this.getUsers();
      })
    }
  }
}
