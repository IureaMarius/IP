import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-exam-page',
    templateUrl: './exam-page.component.html',
    styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {

    constructor() { }
    public examList = [
        { Name: 'Math Exam'},
        { Name: 'Algo Exam'},
        { Name: 'exam Exam'},
        { Name: 'Math Exam'}
    ];

    ngOnInit(): void {
    }

}
