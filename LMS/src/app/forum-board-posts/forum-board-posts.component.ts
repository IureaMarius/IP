import { Component, OnInit } from '@angular/core';
import { ForumManagerService } from '../Services/forum-manager.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-forum-board-posts',
    templateUrl: './forum-board-posts.component.html',
    styleUrls: ['./forum-board-posts.component.css']
})
export class ForumBoardPostsComponent implements OnInit {

    constructor(private forumManager: ForumManagerService,
                private fb: FormBuilder) { }

    public posts;
    public submitPostForm;
    ngOnInit(): void {
        this.forumManager.Posts.subscribe(data => {
            this.posts = data;
        });
        this.submitPostForm = this.fb.group({
            Title: ['', Validators.required],
            Content: ['', Validators.required]
        });
    }
    public submitForm() {
        // send the post to the api manager
        this.submitPostForm.reset();
    }

}
