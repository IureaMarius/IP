import { Component, OnInit } from '@angular/core';
import { ForumManagerService } from '../Services/forum-manager.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-forum-board-posts',
    templateUrl: './forum-board-posts.component.html',
    styleUrls: ['./forum-board-posts.component.css']
})
export class ForumBoardPostsComponent implements OnInit {

    constructor(private forumManager: ForumManagerService,
                private route: ActivatedRoute,
                private fb: FormBuilder) { }

    public posts;
    private id;
    public submitPostForm;
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id'); 
            this.forumManager.getBoardPosts(this.id);
        });
        this.forumManager.Posts.subscribe(data => {
            this.posts = data;
        });
        this.submitPostForm = this.fb.group({
            Title: ['', Validators.required],
            Content: ['', Validators.required]
        });
    }
    public submitForm() {
        this.forumManager.CreatePost(this.submitPostForm).subscribe((result) => {
            console.log(result);
        });
        this.submitPostForm.reset();
    }

}
