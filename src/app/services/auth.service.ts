import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLoginRequest, TypeLoginResponse, TypeRegister } from '../types/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
    ) { 

  }
  
  login(data:TypeLoginRequest):Observable<TypeLoginResponse>{
    return this.http.post<TypeLoginResponse>(`${environment.login}`,data);
  }

  register(data:TypeRegister):Observable<TypeRegister>{
    return this.http.post<TypeRegister>(`${environment.register}`,data);
  }

}
