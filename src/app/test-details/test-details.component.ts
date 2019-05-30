import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Test} from '../test'

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {
  @Input() test:Test;
  @Output() isComplete= new EventEmitter<boolean>();


  testComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
