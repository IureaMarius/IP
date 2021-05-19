import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskManagerService } from '../Services/task-manager.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-exam-page',
    templateUrl: './exam-page.component.html',
    styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {
    constructor(private router: Router,
                private fb: FormBuilder,
                private taskManager: TaskManagerService) { }
    public examList;
    public createTaskForm;
    public subjects = [
        { name: 'Advanced Programming'},
        { name: 'English IV'},
        { name: 'Embedded Engineering'},
        { name: 'Programming Engineering'},
        { name: 'Compilers'},
        { name: 'Introduction into programming'}
    ];

    ngOnInit(): void {
        this.taskManager.Tasks.subscribe(data => {
            this.examList = data;
        });
        this.createTaskForm = this.fb.group({
            Subject: ['', Validators.required],
            Name: ['', Validators.required],
            Date: [new Date(), Validators.required],
            Start: [new Date(), Validators.required],
            End: [new Date(), Validators.required]
        });
    }
    public CreateTask() {
        var newTask: any = {};
        newTask.name = this.createTaskForm.value.Name;
        newTask.subject = this.createTaskForm.value.Subject;
        newTask.startTime = new Date(this.createTaskForm.value.Date + 'T' + this.createTaskForm.value.Start);
        newTask.endTime = new Date(this.createTaskForm.value.Date + 'T' + this.createTaskForm.value.End);
        this.taskManager.CreateTask(newTask);
        this.createTaskForm.reset();
    }
    public deleteTask(id) {
        this.taskManager.DeleteTask(id);
    }

}
