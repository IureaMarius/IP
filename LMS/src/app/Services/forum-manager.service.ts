import { Injectable } from '@angular/core';
import { ApiManagerService } from './api-manager.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ForumManagerService {

    constructor(private apiManager: ApiManagerService,
                private router: Router) {
        this.boards = this.apiManager.GetAllBoards();
        this.Boards.next(this.boards);
    }
    private selectedBoardID;
    public setSelectedBoard(id) {
        this.selectedBoardID = id;
        this.currentBoard = this.boards.find(x => x.ID == id);
        this.CurrentBoard.next(this.currentBoard);
        this.posts = this.apiManager.GetPosts(id);
        this.Posts.next(this.posts);
        // Define the route to the forum-board-posts component
        this.router.navigate([`forum/board/${id}`]);
    }
    public selectedPostID;
    public openComments(id) {
        this.selectedPostID = id;

        this.currentPost = this.posts.find(x => x.ID == id);
        this.CurrentPost.next(this.currentPost);

        this.comments = this.apiManager.GetComments(this.selectedBoardID, id);
        this.Comments.next(this.comments);
        // Define the route to the forum-comments component
        this.router.navigate([`forum/board/${this.selectedBoardID}/${id}`]);
    }

    private currentBoard;
    public CurrentBoard: BehaviorSubject<object> = new BehaviorSubject<object>(null);

    private currentPost;
    public CurrentPost: BehaviorSubject<object> = new BehaviorSubject<object>(null);

    private boards;
    public Boards: BehaviorSubject<object> = new BehaviorSubject<object>(null);

    private posts;
    public Posts: BehaviorSubject<object> = new BehaviorSubject<object>(null);

    private comments;
    public Comments: BehaviorSubject<object> = new BehaviorSubject<object>(null);


}
