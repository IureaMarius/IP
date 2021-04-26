import { Component, OnInit } from '@angular/core';
import { ForumManagerService } from '../Services/forum-manager.service';
@Component({
    selector: 'app-forum-user',
    templateUrl: './forum-user.component.html',
    styleUrls: ['./forum-user.component.css']
})
export class ForumUserComponent implements OnInit {

    constructor(private forumManager: ForumManagerService) { }

    public userInfo;
    ngOnInit(): void {
        //get id from URL
        this.userInfo = this.forumManager.GetUserInfo(23);
        console.log(this.userInfo);
    }

}
