import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-exam-page',
    templateUrl: './exam-page.component.html',
    styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {

    constructor() { }
    public examList = [
        { Name: 'Math Exam', Description: 'this is the math exam good luck lmao'},
        { Name: 'Algo Exam', Description: 'what is this'},
        { Name: 'Exam Exam', Description: 'this the exam exam solve solve'},
        { Name: 'Math Exam', Description: 'second times the charm'}
    ];

    ngOnInit(): void {
    }

}
