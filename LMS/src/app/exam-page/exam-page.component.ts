import { Component, OnInit } from '@angular/core';
import { SubjectManagerService } from '../Services/subject-manager.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-exam-page',
    templateUrl: './exam-page.component.html',
    styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {
  public subjects;
    constructor(private subjectManager: SubjectManagerService,
      private router: Router) { }
    public examList = [
        { Name: 'Exam', Subject: 'Math'},
        { Name: 'Algo Exam', Subject: 'Algorithm desing'},
        { Name: 'Exam Exam', Subject: 'Sport'},
        { Name: 'Math Exam', Subject: 'Math 2'}
    ];

    ngOnInit(): void {
      this.subjects = [
        { name: "Advanced Programming"},
        { name: "English IV"},
        { name: "Embedded Engineering"},
        { name: "Programming Engineering"},
        { name: "Compilers"},
        { name: "Introduction into programming"}
      ];
    }

}
