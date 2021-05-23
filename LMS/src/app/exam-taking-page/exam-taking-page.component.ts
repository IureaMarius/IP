import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskManagerService } from '../Services/task-manager.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-exam-taking-page',
    templateUrl: './exam-taking-page.component.html',
    styleUrls: ['./exam-taking-page.component.css']
})
export class ExamTakingPageComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private fb: FormBuilder,
                private taskManager: TaskManagerService) { }

    private id;
    public examData;
    public questions;
    public answersForm;
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id'); 
            this.taskManager.GetAllQuestions(this.id).subscribe(data => {
                console.log(data);
                this.questions = data;
                this.answersForm = this.fb.group({});
                var index = 0;
                for(var question of this.questions) {
                    this.answersForm.addControl(index, this.fb.control('', Validators.required));
                    index++;
                }
            });
            this.taskManager.GetTask(this.id).subscribe(data => {
                console.log(data);
                this.examData = data;
            });

        });

    }
    public SubmitSolution() {
        var solution = [];
        var i = 0;
        for(var question of this.questions) {
            var answer: any = {};
            answer.studentId = 89;
            answer.questionId = question.id;
            answer.taskId = this.id;
            answer.content = this.answersForm.controls[i.toString()].value;
            solution.push(answer);
        }
        this.taskManager.SubmitSolution(solution);
    }

}
