import { Injectable } from '@angular/core';
import { ApiManagerService } from './api-manager.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ForumManagerService {

    constructor(private apiManager: ApiManagerService) { 
        this.boards = this.apiManager.GetAllBoards();
        this.Boards.next(this.boards);
    }
    private selectedBoardID;
    public setSelectedBoard(id) {
        this.selectedBoardID = id;
        this.posts = this.apiManager.GetPosts(id);
        this.Posts.next(this.posts);
        // Define the route to the forum-board-posts component
        //this.router.navigate([]);
    }
    public selectedPostID;
    public openComments(id) {
        this.selectedPostID = id;
        this.comments = this.apiManager.GetComments(this.selectedBoardID, id);
        this.Comments.next(this.comments);
        // Define the route to the forum-comments component
        //this.router.navigate([]);
    }

    private currentBoard;
    public CurrentBoard: BehaviorSubject<object> = new BehaviorSubject<object>(null);
    
    private boards;
    public Boards: BehaviorSubject<object> = new BehaviorSubject<object>(null);

    private posts;
    public Posts: BehaviorSubject<object> = new BehaviorSubject<object>(null);

    private comments;
    public Comments: BehaviorSubject<object> = new BehaviorSubject<object>(null);


}
