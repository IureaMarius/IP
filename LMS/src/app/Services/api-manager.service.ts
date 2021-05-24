import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiManagerService {

    private baseURLs;
    private endpoints;
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'responseType': 'text'
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
        return this.http.get(this.baseURLs.forum + this.endpoints.AllQuestions + id, this.httpOptions);
    }
    public DeletePost(id) {
        return this.http.delete(this.baseURLs.forum + this.endpoints.DeletePost + id, this.httpOptions);
    }
    public EditPost(post) {
        this.http.put(this.baseURLs.forum + this.endpoints.EditPost, JSON.stringify(post), this.httpOptions).subscribe((data) => {
            console.log(data);

        });
    }

    public GetUserInfo(userId) {
        console.log(userId);
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
        
        return this.http.post(this.baseURLs.forum + this.endpoints.AddQuestion, JSON.stringify(post), this.httpOptions);
    }
    public GetComments(postId) {
        
        return this.http.get(this.baseURLs.forum + this.endpoints.AllComments + postId, this.httpOptions);
    }
    public CreateComment(comment) {
        return this.http.post(this.baseURLs.forum + this.endpoints.AddComment, JSON.stringify(comment), this.httpOptions);
    }
    public DeleteComment(commentId) {
        
        return this.http.delete(this.baseURLs.forum + this.endpoints.DeleteComment + commentId, this.httpOptions);
    }
    public EditComment(comment) {
        this.http.put(this.baseURLs.forum + this.endpoints.UpdateCommentContent, JSON.stringify(comment), this.httpOptions).subscribe((data) => {
            console.log(data);
        });
    }

    public GetAllStudents() {
        return this.http.get(this.baseURLs.task + this.endpoints.GetAllStudents, this.httpOptions);
    }
    public AssignTaskToStudent(assignment) {
        return this.http.post(this.baseURLs.task + this.endpoints.AssignTaskToStudent, JSON.stringify(assignment), this.httpOptions);
    }

    public CreateTask(task) {
        return this.http.post(this.baseURLs.task + this.endpoints.CreateTask, JSON.stringify(task), this.httpOptions);
    }
    public DeleteTask(id) {
        return this.http.delete(this.baseURLs.task + this.endpoints.DeleteTask + id, this.httpOptions);
    }
    public EditTask(task) {
        return this.http.put(this.baseURLs.task + this.endpoints.EditTask + task.id, JSON.stringify(task), this.httpOptions); 
    }
    public GetAllQuestions(taskId) {
        return this.http.get(this.baseURLs.task + this.endpoints.GetAllQuestions + taskId, this.httpOptions);
    }
    public AddQuestion(question) {
        return this.http.post(this.baseURLs.task + this.endpoints.AddTaskQuestion, JSON.stringify(question), this.httpOptions);
    }
    public EditTaskQuestion(question) {
        return this.http.put(this.baseURLs.task + this.endpoints.EditTaskQuestion + question.id, JSON.stringify(question), this.httpOptions);
    }
    public DeleteTaskQuestion(id) {
        return this.http.delete(this.baseURLs.task + this.endpoints.DeleteTaskQuestion + id, this.httpOptions);
    }
    public AddAnswer(answer) {
        return this.http.post(this.baseURLs.task + this.endpoints.AddAnswer, JSON.stringify(answer), this.httpOptions);
    }
    
    public AssignQuestionToTask(questionId, taskId) {
        return this.http.post(this.baseURLs.task + this.endpoints.AssignQuestionToTask, JSON.stringify({questionId: questionId, taskId: taskId}), this.httpOptions);
    }

    public GetAllSubjects() {
        return this.http.get(this.baseURLs.content + this.endpoints.GetAllSubjects, this.httpOptions);
    }
    public GetSubject(id) {
        return this.http.get(this.baseURLs.content + this.endpoints.GetSubject + id, this.httpOptions); 
    }
    public CreateCourse(course) {
        var sentCourse = {
            name: course.name,
            pageTitle: course.title
        };
        return this.http.post(this.baseURLs.content + this.endpoints.CreateCourse, JSON.stringify(sentCourse), this.httpOptions);
    }
    public AddContent(block) {
        return this.http.post(this.baseURLs.content + this.endpoints.AddContent, JSON.stringify(block), this.httpOptions);
    }
    public SetCourseToSubject(association) {
        return this.http.post(this.baseURLs.content + this.endpoints.SetCourseToSubject, JSON.stringify(association), this.httpOptions);
    }
    public CreateSubject(subject) {
        return this.http.post(this.baseURLs.content + this.endpoints.CreateSubject, JSON.stringify(subject), this.httpOptions);
    }
    public GetAssignedStudents(taskId) {
        return this.http.get(this.baseURLs.content + this.endpoints.GetAssignedStudents + taskId, this.httpOptions);
    }
    public GetStudentAnswers(taskId, studentId) {
        return this.http.get(this.baseURLs.content + this.endpoints.GetStudentAnswersPrefix + taskId + this.endpoints.GetStudentAnswersSuffix + studentId, this.httpOptions);
    }

    public SubmitPoints(points) {
        return this.http.post(this.baseURLs.task + this.endpoints.SubmitPoints, JSON.stringify(points), this.httpOptions);
    }
    public EditPoints(points) {
        return this.http.put(this.baseURLs.task + this.endpoints.SubmitPoints, JSON.stringify(points), this.httpOptions);
    }

    public ConfigSMTP(config) {
        return this.http.post(this.baseURLs.mail + this.endpoints.ConfigSMTP, JSON.stringify(config), this.httpOptions);
    }
    public ConfigPOP(config) {
        return this.http.post(this.baseURLs.mail + this.endpoints.ConfigPOP, JSON.stringify(config), this.httpOptions);
    }
    public GetAllEmails() {
        return this.http.get(this.baseURLs.mail + this.endpoints.GetAllEmails, this.httpOptions);
    }
    public SendTextEmail(email) {
        return this.http.post(this.baseURLs.mail + this.endpoints.SendTextEmail, JSON.stringify(email), this.httpOptions);
    }

    public Login(creds) {
        return this.http.post(this.baseURLs.auth + this.endpoints.Login, JSON.stringify(creds), this.httpOptions);
    }
    public Register(creds) {
        return this.http.post(this.baseURLs.auth + this.endpoints.Register, JSON.stringify(creds), this.httpOptions);
    }



}
