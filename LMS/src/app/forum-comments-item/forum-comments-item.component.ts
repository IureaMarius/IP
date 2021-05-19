import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ForumManagerService } from '../Services/forum-manager.service';


@Component({
    selector: 'app-forum-comments-item',
    templateUrl: './forum-comments-item.component.html',
    styleUrls: ['./forum-comments-item.component.css']
})
export class ForumCommentsItemComponent implements OnInit {

    @Input() commentData;
    @Output() deletedComment: EventEmitter<number> = new EventEmitter<number>();
    constructor(private forumManager: ForumManagerService) { }

    ngOnInit(): void {
    }
    public deleteComment() {
        this.forumManager.DeleteComment(this.commentData.id).subscribe((data) => {
            console.log(data);
            this.deletedComment.emit(this.commentData.id);
        });
    }
    public editComment() {
    }

}
