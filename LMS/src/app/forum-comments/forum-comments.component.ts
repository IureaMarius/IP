import { Component, OnInit } from '@angular/core';
import { ForumManagerService } from '../Services/forum-manager.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-forum-comments',
    templateUrl: './forum-comments.component.html',
    styleUrls: ['./forum-comments.component.css']
})
export class ForumCommentsComponent implements OnInit {

    constructor(private forumManager: ForumManagerService,
                private fb: FormBuilder) { }
    public comments;
    public post;
    public commentForm;
    ngOnInit(): void {
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
        this.commentForm.reset();
    }

}
