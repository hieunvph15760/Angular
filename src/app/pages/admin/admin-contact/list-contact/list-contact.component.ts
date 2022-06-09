import { ContactService } from './../../../../services/contact.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TypeContact } from './../../../../types/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  listContact: TypeContact[];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private ContactService:ContactService
  ) {
    this.listContact = []
   }


   getAllcontact(){
     this.ContactService.getAllContact().subscribe(data =>{
        this.listContact = data
     })
   }

  ngOnInit(): void {
    this.getAllcontact();
  }

  onDelete(_id:string){
     const confirmDelete = window.confirm("Bạn có muốn xóa không ?")
     if(confirmDelete && _id){
        this.ContactService.removeContact(_id).subscribe(data =>{
          this.toastr.success("Xóa thành công !");
          this.getAllcontact();
        })
     }
  }

}
