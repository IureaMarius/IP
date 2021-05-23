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
    public addQuestionForm;
    public examData;
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
        this.addQuestionForm = this.fb.group({
            content: ['', Validators.required],
            correctAnswer: ['', Validators.required],
            maxPoints: [0, Validators.required],
            questionType: ['', Validators.required],
        });
        
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id'); 
            this.taskManager.GetAllQuestions(this.id).subscribe(data => {
                console.log(data);
                this.questions = data;
            });
            this.taskManager.GetTask(this.id).subscribe((data: any) => {
                console.log(data);
                this.examData = data;
                if(data) {
                    this.editExamForm = this.fb.group({
                        Subject: [data.subject, Validators.required],
                        Name: [data.name, Validators.required],
                        Date: [new Date(data.startTime), Validators.required],
                        Start: [new Date(data.startTime), Validators.required],
                        End: [new Date(data.endTime), Validators.required]
                    });
                }
            });
        });
    }
    public EditExam() {
        var newTask: any = {};
        newTask.name = this.editExamForm.value.Name;
        newTask.subject = this.editExamForm.value.Subject;
        newTask.startTime = new Date(this.editExamForm.value.Date + 'T' + this.editExamForm.value.Start);
        newTask.endTime = new Date(this.editExamForm.value.Date + 'T' + this.editExamForm.value.End);
        newTask.id = this.id;
        this.taskManager.EditTask(newTask);
    }
    public AddQuestion() {
        var question: any = {};
        question.content = this.addQuestionForm.value.content;
        question.correctAnswer = this.addQuestionForm.value.correctAnswer;
        question.maxPoints = this.addQuestionForm.value.maxPoints;
        question.questionType = this.addQuestionForm.value.questionType;
        if(this.selectedQuestion == null) {
            this.taskManager.AddQuestion(question).subscribe(data => {
                console.log(data);
                this.taskManager.AssignQuestionToTask((data as any).id, this.id);
            });
        }else {
            question.id = this.selectedQuestion.id;
            this.taskManager.EditQuestion(question).subscribe((data: any) => {
                console.log(data);
                this.questions[this.questions.findIndex(x => x.id == data.id)] = data;
            });
        }
    }
    public DeleteQuestion(id) {
        this.taskManager.DeleteQuestion(id).subscribe(data => {
            console.log(data);
            this.questions = this.questions.filter(x => x.id != id);
        });
    }
    private selectedQuestion = null;
    public SelectQuestion(question) {
        this.selectedQuestion = question;
        if(question) {
            this.addQuestionForm = this.fb.group({
                content: [question.content, Validators.required],
                correctAnswer: [question.correctAnswer, Validators.required],
                maxPoints: [question.maxPoints, Validators.required],
                questionType: [question.questionType, Validators.required],
            });
        }else {
            this.addQuestionForm = this.fb.group({
                content: ['', Validators.required],
                correctAnswer: ['', Validators.required],
                maxPoints: [0, Validators.required],
                questionType: ['', Validators.required],
            });
        }
    }

}
