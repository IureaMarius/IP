import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-exam-page',
    templateUrl: './exam-page.component.html',
    styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {

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
