import { ToastrService } from 'ngx-toastr';
import { UsersService } from './../../../../services/users.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  UsersForm:FormGroup
  constructor(
    private router:Router,
    private UsersService:UsersService,
    private toastr: ToastrService
  ) {
    this.UsersForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      role: new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    const data = this.UsersForm.value;
    this.UsersService.createUsers(data).subscribe(data =>{
        this.router.navigateByUrl("/admin/users");
        this.toastr.success("Thêm thành công !");
    })
  }
}
