import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    str:string;
    txt:string;
  constructor() {
    this.str = this.txt = '';
   }
    recDataFromChild(data){
      this.str = data;
    }
    takeInput(event){
    this.txt = event.target.value;
    }
  ngOnInit() {
  }

}
