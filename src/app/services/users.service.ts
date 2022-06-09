import { TypeUsers } from './../types/users';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<TypeUsers[]>{
      return this.http.get<TypeUsers[]>(environment.users);
  }

  removeUser(_id:string):Observable<TypeUsers>{
      return this.http.delete<TypeUsers>(`${environment.users}/${_id}`);
  }

  createUsers(data:TypeUsers):Observable<TypeUsers>{
    return this.http.post<TypeUsers>(`${environment.users}`,data);
  }

}
