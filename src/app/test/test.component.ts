import { Component, OnInit } from '@angular/core';
import { Test } from '../test'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  tests = [
    new Test(1, 'Test1', 'Find an online version and watch merlin find his son',new Date(2019,3,14) ),
    new Test(2, 'Test2', 'I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Test(3, 'Test3', 'Diana has her birthday coming up soon',new Date(2019,1,12)),
    new Test(4, 'Test4', 'Pupper likes expensive sancks',new Date(2019,0,18)),
    new Test(5, 'Test5', 'Damn Math',new Date(2018,2,14)),
  ]
  completeTest(isComplete,index){
    if(isComplete){
      this.tests.splice(index,1);
    }
  }
  toogleDetails(index){
    this.tests[index].showDescription = !this.tests[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
