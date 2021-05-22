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
    public GetAllQuestions(taskId) {
        return this.apiManager.GetAllQuestions(taskId);
    }

}
