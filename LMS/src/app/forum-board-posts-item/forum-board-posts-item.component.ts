import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ForumManagerService } from '../Services/forum-manager.service';
@Component({
    selector: 'app-forum-board-posts-item',
    templateUrl: './forum-board-posts-item.component.html',
    styleUrls: ['./forum-board-posts-item.component.css']
})
export class ForumBoardPostsItemComponent implements OnInit {

    constructor(private forumManager: ForumManagerService) { }
    @Input() postData;
    @Output() deletedPost: EventEmitter<number> = new EventEmitter<number>();
    ngOnInit(): void {
        console.log(this.postData);
    }

    public deletePost() {
        this.forumManager.DeletePost(this.postData.id).subscribe((data) => {
            this.deletedPost.emit(this.postData.id);
            console.log(data);
        });
    }
    public openComments() {
        this.forumManager.openComments(this.postData.id);
    }

}
