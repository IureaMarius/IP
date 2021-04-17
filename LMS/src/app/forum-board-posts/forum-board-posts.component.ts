import { Component, OnInit } from '@angular/core';
import { ForumManagerService } from '../Services/forum-manager.service';
@Component({
    selector: 'app-forum-board-posts',
    templateUrl: './forum-board-posts.component.html',
    styleUrls: ['./forum-board-posts.component.css']
})
export class ForumBoardPostsComponent implements OnInit {

    constructor(private forumManager: ForumManagerService) { }

    public posts;
    ngOnInit(): void {
        this.forumManager.Posts.subscribe(data => {
            this.posts = data;
        });
    }

}
