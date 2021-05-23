import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from '../Services/task-manager.service';

@Component({
    selector: 'app-student-exam-selector',
    templateUrl: './student-exam-selector.component.html',
    styleUrls: ['./student-exam-selector.component.css']
})
export class StudentExamSelectorComponent implements OnInit {

    constructor(private taskManager: TaskManagerService) { }
    public examList;
    ngOnInit(): void {
        this.taskManager.Tasks.subscribe(data => {
            console.log(data);
            this.examList = data;
        });
    }

}
