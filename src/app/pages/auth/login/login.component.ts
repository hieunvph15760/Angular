import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private AuthService:AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('',Validators.required)
    })
   }
   
  ngOnInit(): void {
  }

  onSubmit(){
    const data = this.loginForm.value;
    this.AuthService.login(data).subscribe(data =>{
        localStorage.setItem("user",JSON.stringify(data));
        this.toastr.success("Đăng nhập thành công !")
        this.router.navigateByUrl('/');
    })
  }
}
