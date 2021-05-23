import { Component, OnInit } from '@angular/core';
import { ForumManagerService } from '../Services/forum-manager.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-forum-comments',
    templateUrl: './forum-comments.component.html',
    styleUrls: ['./forum-comments.component.css']
})
export class ForumCommentsComponent implements OnInit {

    constructor(private forumManager: ForumManagerService,
                private route: ActivatedRoute,
                private fb: FormBuilder) { }
    public comments;
    public post;
    public commentForm;
    public editCommentForm;
    private id;
    private selectedCommentId;
    public editPostForm;
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('postId'); 
            this.forumManager.GetComments(this.id);
        });
        this.forumManager.Comments.subscribe(data => {
            this.comments = data;
            console.log(this.comments);
        });
        this.forumManager.CurrentPost.subscribe(data => {
            this.post = data;
            console.log(this.post);

            if(this.post) {
                this.editPostForm = this.fb.group({
                    Title: [this.post.title, Validators.required],
                    Content: [this.post.content, Validators.required]
                });
            }
        });
        this.commentForm = this.fb.group({
            Comment: ['', Validators.required]
        });
        this.editCommentForm = this.fb.group({
            Comment: ['', Validators.required]
        });


        this.editPostForm = this.fb.group({
            Title: ['', Validators.required],
            Content: ['', Validators.required]
        });
    }
    public removeComment(id) {
        this.comments = this.comments.filter((x) => x.id != id);
    }
    public deletePost() {
        this.forumManager.DeletePost(this.id).subscribe((data) => {
            console.log(data);
            window.history.back();
        });
    }
    public submitComment() {
        //send to API
        this.forumManager.CreateComment(this.commentForm.value.Comment);
        this.commentForm.reset();
    }
    public editPost() {
        var post: any = {};
        post.idQuestion = this.id;
        post.title = this.editPostForm.value.Title;
        post.content = this.editPostForm.value.Content;

        this.forumManager.EditPost(post);
    }
    public editComment() {
        var comment: any = {};
        comment.idComment = this.selectedCommentId;
        comment.content = this.editCommentForm.value.Comment;
        this.forumManager.EditComment(comment);
    }
    public selectComment(id) {
        this.selectedCommentId = id;
    }

}
