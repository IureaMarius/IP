import { Injectable } from '@angular/core';
import { ApiManagerService } from './api-manager.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ForumManagerServiceService {

    constructor(private apiManager: ApiManagerService) { 
        this.boards = this.apiManager.getBoards();
        this.Boards.next(this.boards);
    }

    private boards;
    public Boards: BehaviorSubject<object> = new BehaviorSubject<object>(null);
    private currentBoard;


}
