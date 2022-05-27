import { NgForm } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() inputValues:any;

  @Output() handleSubmit: EventEmitter<any>;

  constructor() {
    this.handleSubmit = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm){
    
    this.handleSubmit.emit(userForm.value);

    userForm.resetForm({
      name:'',
      age:0,
      email:'',
      phone:'',
      avartar:''
    });
  }


}
