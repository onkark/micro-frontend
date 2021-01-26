import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-entry',
  templateUrl: './child-entry.component.html',
  styleUrls: ['./child-entry.component.css']
})
export class ChildEntryComponent implements OnInit {

  @Input() formObj:any;

  

  constructor() { }

  ngOnInit(): void {
  }
  
}
