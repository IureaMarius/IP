import { Component, OnInit, Input } from '@angular/core';
import { ForumManagerService } from '../Services/forum-manager.service';
@Component({
    selector: 'app-forum-boards-item',
    templateUrl: './forum-boards-item.component.html',
    styleUrls: ['./forum-boards-item.component.css']
})
export class ForumBoardsItemComponent implements OnInit {

    constructor(private forumManager: ForumManagerService) { }
    @Input() boardData;

    ngOnInit(): void {
    }

    public openBoard() {
        this.forumManager.setSelectedBoard(this.boardData.id);
    }

}
