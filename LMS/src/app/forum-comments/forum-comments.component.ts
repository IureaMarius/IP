import { Component, OnInit } from '@angular/core';
import { ForumManagerService } from '../Services/forum-manager.service';
@Component({
    selector: 'app-forum-comments',
    templateUrl: './forum-comments.component.html',
    styleUrls: ['./forum-comments.component.css']
})
export class ForumCommentsComponent implements OnInit {

    constructor(private forumManager: ForumManagerService) { }
    public comments;
    ngOnInit(): void {
        this.forumManager.Comments.subscribe(data => {
            this.comments = data;
        });
    }

}
