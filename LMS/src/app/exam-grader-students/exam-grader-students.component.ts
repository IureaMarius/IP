import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskManagerService } from '../Services/task-manager.service';

@Component({
    selector: 'app-exam-grader-students',
    templateUrl: './exam-grader-students.component.html',
    styleUrls: ['./exam-grader-students.component.css']
})
export class ExamGraderStudentsComponent implements OnInit {

    constructor(private taskManager: TaskManagerService,
                private route: ActivatedRoute) { }

    private examId;
    public examData;
    public students;
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.examId = params.get('id'); 
        });
        this.taskManager.GetTask(this.examId).subscribe((data: any) => {
            console.log(data);
            this.examData = data;
        });
        this.taskManager.GetAssignedStudents(this.examId).subscribe(data => {
            console.log(data);
            this.students = data;
        });
    }

}
