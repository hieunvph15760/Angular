import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() image:String;
  @Input() age:Number;

  constructor() { 
    this.image = "";
    this.age = 0;
  }

  ngOnInit(): void {
  }

}
