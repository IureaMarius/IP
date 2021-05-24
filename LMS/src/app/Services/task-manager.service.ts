import { Injectable } from '@angular/core';
import { ApiManagerService } from './api-manager.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TaskManagerService {

    constructor(private apiManager: ApiManagerService) { 
        this.apiManager.GetAllTasks().subscribe((data) => {
            console.log(data);
            this.tasks = data;
            this.Tasks.next(this.tasks);
        });

    }
    private tasks;
    public Tasks: BehaviorSubject<object> = new BehaviorSubject<object>(null);
    public CreateTask(task) { 
        this.apiManager.CreateTask(task).subscribe(data => {
            console.log(data);
        });
    }
    public DeleteTask(id) {
        return this.apiManager.DeleteTask(id).subscribe(data => {
            console.log(data);
            this.tasks = this.tasks.filter(x => x.id != id);
            this.Tasks.next(this.tasks);
        });
    }
    public EditTask(task) {
        this.apiManager.EditTask(task).subscribe(data => {
            console.log(data);
        });
    }
    public AddQuestion(question) {
        return this.apiManager.AddQuestion(question);
    }
    public DeleteQuestion(id) {
        return this.apiManager.DeleteTaskQuestion(id);
    }
    public AssignQuestionToTask(questionId, taskId) {
        this.apiManager.AssignQuestionToTask(questionId, taskId).subscribe(data => {
            console.log(data);
        });
    }
    public GetTask(id) {
        return this.apiManager.GetTask(id);
    }
    public GetAllQuestions(taskId) {
        return this.apiManager.GetAllQuestions(taskId);
    }
    public EditQuestion(question) {
        return this.apiManager.EditTaskQuestion(question);
    }

    public SubmitSolution(answerList) {
        for(var answer of answerList) {
            this.apiManager.AddAnswer(answer).subscribe(data => {
                console.log(data);
            });
        }
    }

    public GetAllStudents() {
        return this.apiManager.GetAllStudents();
    }
    public AssignTaskToStudents(assignmentList) {
        for(var assignment of assignmentList) {
            this.apiManager.AssignTaskToStudent(assignment).subscribe(data => {
                console.log(data);
            });
        }
    }
    public GetAssignedStudents(id) {
        return this.apiManager.GetAssignedStudents(id);
    }
    public GetStudentAnswers(taskId, studentId) {
        return this.apiManager.GetStudentAnswers(taskId, studentId);
    }
    public SubmitPoints(pointsList) {
        for(var points of pointsList) {
            this.apiManager.SubmitPoints(points).subscribe(data => {
                console.log(data);
            },
            (err) => {
                console.log(err);
                this.apiManager.EditPoints(points).subscribe(data => {
                    console.log(data);
                });
            });
        }
    }
}
