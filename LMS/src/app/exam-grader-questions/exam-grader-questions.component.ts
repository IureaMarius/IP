import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskManagerService } from '../Services/task-manager.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'app-exam-grader-questions',
    templateUrl: './exam-grader-questions.component.html',
    styleUrls: ['./exam-grader-questions.component.css']
})
export class ExamGraderQuestionsComponent implements OnInit {

    constructor(private taskManager: TaskManagerService,
                private fb: FormBuilder,
                private location: Location,
                private route: ActivatedRoute) { }

    private examId;
    private studentId;
    private answers;
    public examData;
    public pointsForm;
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.examId = params.get('examId'); 
            this.studentId = params.get('studentId'); 
            this.taskManager.GetTask(this.examId).subscribe(data => {
                console.log(data);
                this.examData = data;
            });

            this.taskManager.GetStudentAnswers(this.examId, this.studentId).subscribe((data: any) => {
                console.log(data);
                this.answers = data;

                this.pointsForm = this.fb.group({});
                var index = 0;
                for(var answer of this.answers) {
                    this.pointsForm.addControl(index, this.fb.control('', Validators.required));
                    index++;
                }
            });
        });

    }
    public SubmitPoints() {

        var points = [];
        for(var index in this.answers) {
            var temp: any = {};
            temp.studentId = this.studentId;
            temp.taskId = this.examId;
            temp.scoreValue = this.pointsForm.controls[index.toString()].value;
            temp.questionId = this.answers[index].question.id;
            points.push(temp);
        }
        this.taskManager.SubmitPoints(points);
        this.location.back();

    }

}
