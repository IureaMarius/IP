import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiManagerService {

    private baseURLs;
    private endpoints;
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    constructor(private appConfigService: AppConfigService,
                private http: HttpClient) { 
        this.baseURLs = appConfigService.appConfig.apiUrls;
        this.endpoints = appConfigService.appConfig.endpoints;
    }
    public GetAllBoards() {
        return this.http.get(this.baseURLs.forum + this.endpoints.AllForums, this.httpOptions);
    }
    public GetTask(id) {
        return this.http.get(this.baseURLs.task + this.endpoints.GetTask + id, this.httpOptions);
    }
    public GetAllTasks() {
        return this.http.get(this.baseURLs.task + this.endpoints.GetAllTasks, this.httpOptions);
    }
    public GetPosts(id) {
        var params: any = new HttpParams().append('idForum', id);
        
        var requestOptions: any = {...this.httpOptions};
        requestOptions.params = params;
        
        return this.http.get(this.baseURLs.forum + this.endpoints.AllQuestions, requestOptions);
    }
    GetUserInfo(userId) {
        var User = {
            Name: 'Ciobi',
            PostsCount: 99,
            CommentCount: 1235,
            ProfilePicture: 'https://avatars.githubusercontent.com/u/99944?s=400&v=4',
            RecentSubmissions: [
                { Type: 'post', Title: 'Feeling lost in this course, I found this indian on youtube that can help you!', ID: 82, Author: { Name: 'Ciobi', ID: 8}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 12, Karma: 999 },
                { Type: 'post', Title: 'What classroom is this course in for group E8?', ID: 8293, Author: { Name: 'Ciobi', ID: 9999999998}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 1, Karma: 99 },
                {  Type: 'post', Title: 'At what hour will the exam start?', ID: 82, Author: { Name: 'Ciobi', ID: 8889}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 18, Karma: 999 },
                {  Type: 'post', Title: 'De ce dracu e tot forumu asta in engleza?', ID: 82, Author: { Name: 'Ciobi', ID: 1213122}, LastUpdate: '2021-04-16T17:03:18.079Z', CommentCount: 0, Karma: 999 },
                { Type: 'comment', Text: 'How do you feel about failing this class 23 times in the last 23 years?', Author: 'Ciobi', Karma: '23' },
                { Type: 'comment', Text: 'You should really stop talking about this kind of stuff here, it\'s kind of pointles', Author: 'Ciobi', Karma: '2' },
                { Type: 'comment', Text: 'You should google it', Author: 'xXxTestxXx', Karma: '99' },
                { Type: 'comment', Text: 'This package you are using has been deprecated, you should avoid using it from now on. If you have to use it on a project, look into the source code since you\'ll probably also have to maintain it', Author: 'Ciobi', Karma: '12' }
            ],
            PersonalDescription: 'None of your business.'
        };
        return User;
    }


    public CreatePost(post) {
        var params: any = new HttpParams().append('idForum', post.idForum).append('title', post.Title).append('content', post.Content);
        var requestOptions: any = {...this.httpOptions};
        requestOptions.params = params;
        
        return this.http.post(this.baseURLs.forum + this.endpoints.AddQuestion, null, requestOptions);
    }
    GetComments(postId) {
        var params: any = new HttpParams().append('id', postId);
        var requestOptions: any = {...this.httpOptions};
        requestOptions.params = params;
        
        return this.http.get(this.baseURLs.forum + this.endpoints.AllComments, requestOptions);
    }
    CreateComment(comment) {
        var params: any = new HttpParams().append('idQuestion', comment.postId).append('content', comment.content);
        var requestOptions: any = {...this.httpOptions};
        requestOptions.params = params;
        
        return this.http.post(this.baseURLs.forum + this.endpoints.AddComment, null, requestOptions);
    }
}
