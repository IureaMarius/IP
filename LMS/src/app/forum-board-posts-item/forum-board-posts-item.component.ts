import { Component, OnInit, Input } from '@angular/core';
import { ForumManagerService } from '../Services/forum-manager.service';
@Component({
    selector: 'app-forum-board-posts-item',
    templateUrl: './forum-board-posts-item.component.html',
    styleUrls: ['./forum-board-posts-item.component.css']
})
export class ForumBoardPostsItemComponent implements OnInit {

    constructor(private forumManager: ForumManagerService) { }
    @Input() postData;
    ngOnInit(): void {
    }

    public openComments() {
        this.forumManager.openComments(this.postData.ID);
    }

}
