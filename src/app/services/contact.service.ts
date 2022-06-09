import { TypeContact } from './../types/contact';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  createContact(data:TypeContact):Observable<TypeContact>{
    return this.http.post<TypeContact>(`${environment.contact}`,data);
  }

  getAllContact():Observable<TypeContact[]>{
    return this.http.get<TypeContact[]>(`${environment.contact}`)
  }

  removeContact(_id:string):Observable<TypeContact>{
    return this.http.delete<TypeContact>(`${environment.contact}/${_id}`)
  }
}
