import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiManagerService {

    private baseURL;
    private endpoints;
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    constructor(private appConfigService: AppConfigService,
                private http: HttpClient) { 
        this.baseURL = appConfigService.appConfig.apiUrl;
        this.endpoints = appConfigService.appConfig.endpoints;
    }
    public LogIn(req) {
        this.http.post(this.baseURL + this.endpoints.LogIn, JSON.stringify(req), this.httpOptions);
    }
    public GetAllBoards() {
        var boards = [
            { Name: 'Advanced Programming', ID: 261, Description: 'Discussion about the topics in the Advanced Programming course', LastUpdate: '2021-04-16T17:03:18.079Z' },
            { Name: 'Embedded Systems', ID: 236, Description: 'Discussion about the topics in the Embedded Systems course', LastUpdate: '2021-04-16T17:03:18.079Z' },
            { Name: 'English', ID: 666, Description: 'Discussion about the topics in the English course', LastUpdate: '2021-04-16T17:03:18.079Z' },
            { Name: 'Object Oriented Programming', ID: 2823, Description: 'Discussion about the topics in the Object Oriented Programming course', LastUpdate: '2021-04-16T17:03:18.079Z' },
            { Name: 'Web Technologies', ID: 789, Description: 'Discussion about the topics in the Web Technologies course', LastUpdate: '2021-04-16T17:03:18.079Z' },
            { Name: 'Introduction into programming', ID: 1289, Description: 'Discussion about the topics in the Introduction into Programming course', LastUpdate: '2021-04-16T17:03:18.079Z' },
            { Name: 'Logic', ID: 51327, Description: 'Discussion about the topics in the Logic course', LastUpdate: '2021-04-16T17:03:18.079Z' },
            { Name: 'Quantum Computing', ID: 2315, Description: 'Discussion about the topics in the Quantum Computing course', LastUpdate: '2021-04-16T17:03:18.079Z' },
            { Name: 'Maths', ID: 234659, Description: 'Discussion about the topics in the Maths course', LastUpdate: '2021-04-16T17:03:18.079Z' },
            { Name: 'Data Structures', ID: 296, Description: 'Discussion about the topics in the Data Structures course', LastUpdate: '2021-04-16T17:03:18.079Z' },
            { Name: 'ACSO', ID: 64037, Description: 'Discussion about the topics in the ACSO course', LastUpdate: '2021-04-16T17:03:18.079Z' },
            { Name: 'Administrative', ID: 706, Description: 'General administrative issues Programming course', LastUpdate: '2021-04-16T17:03:18.079Z' },
            { Name: 'Open discussion', ID: 908, Description: 'General discussion, get to know your collegues', LastUpdate: '2021-04-16T17:03:18.079Z' },
            { Name: 'memes', ID: 235, Description: 'The dankest memes in this university', LastUpdate: '2021-04-16T17:03:18.079Z' },
        ];
        return boards;
    }
    GetPosts(id) {
        var posts = [
            { Title: '[STICKY] General discussion thread', ID: 25, Author: { Name: 'AutoModerator', ID: 0}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 236, Karma: -199 },
            { Title: '[STICKY] Remember to attend the exam this friday', ID: 92, Author: { Name: 'D\'na profesoara', ID: 3}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 16, Karma: -9999 },
            { Title: 'Anybody got last weeks homework?', ID: 982, Author: { Name: 'Duduia891', ID: 8909}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 1, Karma: 99 },
            { Title: '3/23 homework exercise 1 discussion', ID: 7782, Author: { Name: 'Oparitu 89', ID: 264669}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 77, Karma: 999 },
            { Title: 'Midterms exam results', ID: 1282, Author: { Name: 'D\'na profesoara', ID: 3}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 9892, Karma: 899 },
            { Title: 'Anybody feels like they are going to fail this class?', ID: 8982, Author: { Name: 'Nu', ID: 239}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 0, Karma: 0 },
            { Title: 'Feeling lost in this course, I found this indian on youtube that can help you!', ID: 82, Author: { Name: 'IndianuAlaDePeYT', ID: 8}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 12, Karma: 999 },
            { Title: 'What classroom is this course in for group E8?', ID: 8293, Author: { Name: 'Mampierdutimplmea', ID: 9999999998}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 1, Karma: 99 },
            { Title: 'At what hour will the exam start?', ID: 82, Author: { Name: 'CelalaltIndianDePeYT', ID: 8889}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 18, Karma: 999 },
            { Title: 'De ce dracu e tot forumu asta in engleza?', ID: 82, Author: { Name: 'nohablaespanol', ID: 1213122}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 0, Karma: 999 },
            { Title: 'How long do you have to boil eggs for?', ID: 82, Author: { Name: 'test123', ID: 3338}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 1, Karma: -999 },
            { Title: 'Suggestion for changing the course material', ID: 82, Author: { Name: 'Alamaismecher', ID: 888}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 12222, Karma: 1999 },
            { Title: 'I failed this class last semester AMA', ID: 82, Author: { Name: 'obviousthrowaway', ID: 1213122}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 90999, Karma: 9999999999 },
            { Title: 'I didn\'t fail the exam last semester, like the idiot above me AMA', ID: 9992, Author: { Name: 'Notthesamethrowaway', ID: 8888}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 1, Karma: -999999 },
            { Title: 'Why are you reading this?', ID: 82, Author: { Name: 'Alamaismecher', ID: 8}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 12222, Karma: 1999 },
        ];
        return posts;
    }
    GetComments(boardId, postId) {
        var comments = [
            { Text: 'This should obviously be on the stickied discussion thread, stop spamming the board', Author: 'AnnoyingTurtle', Karma: '3' },
            { Text: 'Yeah sure just go ahead and look it up on youtube, you\'ll probably find an indian that can help you', Author: 'nobody', Karma: '', Replies: [
                { Text: 'Are you gonna really say that and give no link?', Author: 'dont', Karma: '3'},
                { Text: 'Thank you, that was really helpful /s', Author: 'alalalt', Karma: '3'},
                { Text: 'Can you call me and explain this better please?', Author: 'alalalt', Karma: '3', Replies: [
                    { Text: 'no wtf', Author: 'AnnoyingTurtle', Karma: '3' }
                ]},
            ]
            },
            { Text: 'between 5 and 8 minutes, depending on how runny the yolk should be', Author: 'AmazingCook999', Karma: '9' },
            { Text: 'How do you feel about failing this class 23 times in the last 23 years?', Author: 'Ciobi', Karma: '23' },
            { Text: '', Author: '', Karma: '' },
            { Text: '', Author: '', Karma: '' },
            { Text: '', Author: '', Karma: '' },
            { Text: '', Author: '', Karma: '' },
            { Text: '', Author: '', Karma: '' },
            { Text: '', Author: '', Karma: '' },
            { Text: '', Author: '', Karma: '' },
            { Text: '', Author: '', Karma: '' },
            { Text: '', Author: '', Karma: '' },
        ];
        return comments;
    }
    GetUserInfo(userId) {
        var User = {
            Name: 'Ciobi',
            PostsCount: 99,
            CommentCount: 1235,
            ProfilePicture: 'https://avatars.githubusercontent.com/u/99944?s=400&v=4',
            RecentSubmissions: [
                { Type: 'Post', Title: 'How did everyone in this class fail, again?', Karma: -999},
                { Type: 'Comment', Text: 'Well maybe if you came to the courses you would understand', Karma: -9999},
                { Type: 'Comment', Text: 'no >.<', Karma: -9999},
                { Type: 'Comment', Text: 'I feel like this question shouln\'t even be asked if you got to this point in the course', Karma: -9999},
                { Type: 'Comment', Text: 'Stop upvoting this post or I\'ll have to fail you again', Karma: -9999},
                { Type: 'Post', Title: 'I deleted everybody\'s grades accidentally', Karma: 10000},
                { Type: 'Post', Title: 'google.com how to restore dropped table SSMS database', Karma: 99},
                { Type: 'Post', Title: 'SQL drop table help', Karma: 99},
            ],
            PersonalDescription: 'None of your business.'
        };
        return User;
    }
}
