import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskManagerService } from '../Services/task-manager.service';

@Component({
    selector: 'app-exam-assign-page',
    templateUrl: './exam-assign-page.component.html',
    styleUrls: ['./exam-assign-page.component.css']
})
export class ExamAssignPageComponent implements OnInit {

    constructor(private taskManager: TaskManagerService,
                private fb: FormBuilder,
                private route: ActivatedRoute) { }

    private id;
    public students;
    public studentsForm;
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id'); 
        });
        this.taskManager.GetAllStudents().subscribe(data => {
            console.log(data);
            this.students = data;
            this.studentsForm = this.fb.group({});
            var index = 0;
            for(var student of this.students) {
                this.studentsForm.addControl(index, this.fb.control(false, Validators.required));
                index++;
            }
        });
    }
    public SubmitAssignments() {
        var assignments = [];
        for(var index in this.students) {
            if(this.studentsForm.value[index.toString()] == true)
                assignments.push({studentId: this.students[index].id, taskId: this.id});
        }
        this.taskManager.AssignTaskToStudents(assignments);
    }

}
