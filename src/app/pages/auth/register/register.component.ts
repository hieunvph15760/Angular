import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  constructor(
    private AuthService:AuthService,
    private router:Router,
    private toastr:ToastrService
  ) {
    this.registerForm = new FormGroup({
        name: new FormControl('',Validators.required),
        email: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    const data = this.registerForm.value;
    this.AuthService.register(data).subscribe(data =>{
        this.toastr.success("Đăng ký thành công, chuyển đến trang đang nhập sau 3 giây !");
        setTimeout(() => {
            this.router.navigateByUrl("/auth/login");
        }, 3000);
    })
  }

}
