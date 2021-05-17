import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-forum-comments-item',
    templateUrl: './forum-comments-item.component.html',
    styleUrls: ['./forum-comments-item.component.css']
})
export class ForumCommentsItemComponent implements OnInit {

    @Input() commentData;
    constructor() { }

    ngOnInit(): void {
    }
    public deleteComment() {
    }

}
