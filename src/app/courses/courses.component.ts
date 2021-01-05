import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `<p>{{title}}</p>
  <hr> 
  Here is my courses : 
  <ol  *ngFor="let course of courses"><li>{{course}}</li></ol> `,
  
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title="Helliw :D ";
  courses=["course1","course2","course3"];

}
