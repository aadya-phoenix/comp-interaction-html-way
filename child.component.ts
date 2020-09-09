import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output()
  sendtochild:EventEmitter<string> =  new EventEmitter<string> ();

  @Input('parentdata')

  x:string;

constructor(){}

  send(val:string):void{
    this.sendtochild.emit(val);
  }

 

}
