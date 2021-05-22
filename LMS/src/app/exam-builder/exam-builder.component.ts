import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from '../Services/task-manager.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-exam-builder',
    templateUrl: './exam-builder.component.html',
    styleUrls: ['./exam-builder.component.css']
})
export class ExamBuilderComponent implements OnInit {

    constructor(private taskManager: TaskManagerService,
                private fb: FormBuilder,
                private route: ActivatedRoute) { }

    public questions;
    public editExamForm;
    public subjects = [
        { name: 'Advanced Programming'},
        { name: 'English IV'},
        { name: 'Embedded Engineering'},
        { name: 'Programming Engineering'},
        { name: 'Compilers'},
        { name: 'Introduction into programming'}
    ];
    private id;
    ngOnInit(): void {

        this.editExamForm = this.fb.group({
            Subject: ['', Validators.required],
            Name: ['', Validators.required],
            Date: [new Date(), Validators.required],
            Start: [new Date(), Validators.required],
            End: [new Date(), Validators.required]
        });
        
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id'); 
            this.taskManager.GetAllQuestions(this.id).subscribe(data => {
                console.log(data);
                this.questions = data;
            });
        });
    }
    public EditExam() {
    }

}
