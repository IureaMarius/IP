import { Component, OnInit } from '@angular/core';
import { ForumManagerService } from '../Services/forum-manager.service';

@Component({
    selector: 'app-forum-boards',
    templateUrl: './forum-boards.component.html',
    styleUrls: ['./forum-boards.component.css']
})
export class ForumBoardsComponent implements OnInit {

    constructor(private forumManager: ForumManagerService) { }
    public boards;
    ngOnInit(): void {
        this.forumManager.Boards.subscribe(data => {
            this.boards = data;
        });
    }

}
