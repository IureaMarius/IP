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
    private id;
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

        });
        this.commentForm = this.fb.group({
            Comment: ['', Validators.required]
        });
    }
    public submitComment() {
        //send to API
        this.forumManager.CreateComment(this.commentForm.value.Comment);
        this.commentForm.reset();
    }

}
