import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  @Input() field:any
  @Input() key:string;


  constructor() {
    this.key = ''
   }

  ngOnInit(): void {
  }

}
