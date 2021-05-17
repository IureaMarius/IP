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
        this.apiManager.GetAllBoards().subscribe((boards) => {
            this.boards = boards;
            console.log(this.boards);
            this.Boards.next(this.boards);
        });
    }
    private selectedBoardID;
    public getBoardPosts(id) {
        this.selectedBoardID = id;
        this.apiManager.GetPosts(id).subscribe((posts) => {
            this.posts = posts;
            this.Posts.next(this.posts);
        });
    }
    public CreatePost(post) {
        var forward = {
            idForum: this.selectedBoardID,
            Title: post.value.Title,
            Content: post.value.Content
        };
        return this.apiManager.CreatePost(forward);
    }
    public DeletePost(id) {
        return this.apiManager.DeletePost(id);
    }
    public setSelectedBoard(id) {
        this.selectedBoardID = id;
        this.currentBoard = this.boards.find(x => x.id == id);
        this.CurrentBoard.next(this.currentBoard);
        this.router.navigate([`forum/board/${id}`]);
    }
    public selectedPostID;
    public GetComments(id) {
        this.selectedPostID = id;


        this.apiManager.GetComments(id).subscribe((data: any) => {
            this.comments = data.comments;
            this.Comments.next(this.comments);
            this.currentPost = data;
            this.CurrentPost.next(this.currentPost);
        });
    }
    public openComments(id) {
        this.router.navigate([`forum/board/${this.selectedBoardID}/${id}`]);
    }

    public GetUserInfo(id) {
        return this.apiManager.GetUserInfo(id);
    }
    public CreateComment(commentContent) {
        this.apiManager.CreateComment({postId: this.currentPost.id, content: commentContent}).subscribe((data) => {
            console.log(data);
        });
    }
    public EditPost(post) {
        this.apiManager.EditPost(post);
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
