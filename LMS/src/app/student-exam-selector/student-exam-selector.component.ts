import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-exam-selector',
  templateUrl: './student-exam-selector.component.html',
  styleUrls: ['./student-exam-selector.component.css']
})
export class StudentExamSelectorComponent implements OnInit {

  constructor() { }
  public examList = [
    { Name: 'Exam', Subject: 'Math'},
    { Name: 'Algo Exam', Subject: 'Algorithm desing'},
    { Name: 'Exam Exam', Subject: 'Sport'},
    { Name: 'Math Exam', Subject: 'Math 2'}
  ];
  ngOnInit(): void {
  }

}
