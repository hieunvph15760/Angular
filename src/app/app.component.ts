import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teachers = [
    {
      id:1,
      name:"Hoa",
      age:40,
      gender:0,
      avatar:"https://img.lovepik.com/photo/50112/2990.jpg_wh860.jpg",
      status:1
    },
    {
      id:2,
      name:"Hiếu",
      age:20,
      gender:1,
      avatar:"https://cdn.luatvietnam.vn/uploaded/Images/Original/2020/11/17/so-sach-cua-giao-vien-cac-cap_1711143350.jpg",
      status:0
    }
  ]


  showTable = true;

  ClickTable(){
    this.showTable = !this.showTable;
  }

  inputValue = {
    name:'',
    age:'',
    gender:'',
    avatar:'',
    status:''
  }

  onInput(event:any, key:'name'|'age'|'gender'|'avatar'|'status'){
      this.inputValue[key] = event.target.value
  }

  add(){
     this.teachers.push({
       ...this.inputValue,
       age: +this.inputValue.age,
       gender: +this.inputValue.gender,
       status: +this.inputValue.status,
       avatar: this.inputValue.avatar,
       id: this.teachers.length + 1
     });
     console.log(this.teachers);
     

     this.inputValue = {
      name:'',
      age:'',
      gender:'0',
      avatar:'',
      status:'0'
    }
  }
}
