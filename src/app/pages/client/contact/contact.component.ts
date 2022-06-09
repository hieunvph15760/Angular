import { ContactService } from './../../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ContactForm:FormGroup
  constructor(
    private toash:ToastrService,
    private ContactService:ContactService
    ) { 
    this.ContactForm = new FormGroup({
        name: new FormControl('',Validators.required),
        email: new FormControl('',Validators.required),
        content: new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const data = this.ContactForm.value;
    this.ContactService.createContact(data).subscribe(data =>{
        this.ContactForm.reset();
        this.toash.success("Cảm ơn bạn đã liên hệ với chúng tôi !");
    })
  }

}
