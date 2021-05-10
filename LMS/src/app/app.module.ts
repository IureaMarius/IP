import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LearningPageComponent } from './learning-page/learning-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RoutingModule } from './routing/routing.module';
import { SubjectPageComponent } from './subject-page/subject-page.component';
import { HeaderComponent } from './header/header.component';
import { AppConfigService } from './Services/app-config.service';
import { ForumBoardsComponent } from './forum-boards/forum-boards.component';
import { ForumBoardsItemComponent } from './forum-boards-item/forum-boards-item.component';
import { ForumBoardPostsComponent } from './forum-board-posts/forum-board-posts.component';
import { ForumCommentsComponent } from './forum-comments/forum-comments.component';
import { ForumCommentsItemComponent } from './forum-comments-item/forum-comments-item.component';
import { ForumBoardPostsItemComponent } from './forum-board-posts-item/forum-board-posts-item.component';
import { ForumUserComponent } from './forum-user/forum-user.component';
import { EmailPageComponent } from './email-page/email-page.component';
import { EmailPageItemComponent } from './email-page-item/email-page-item.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { ExamBuilderComponent } from './exam-builder/exam-builder.component';
import { ExamTakingPageComponent } from './exam-taking-page/exam-taking-page.component';

export function appInit(appConfig: AppConfigService) {
    return () => appConfig.load();
}
@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        LearningPageComponent,
        ForgotPasswordComponent,
        SubjectPageComponent,
        HeaderComponent,
        ForumBoardsComponent,
        ForumBoardsItemComponent,
        ForumBoardPostsComponent,
        ForumCommentsComponent,
        ForumCommentsItemComponent,
        ForumBoardPostsItemComponent,
        ForumUserComponent,
        EmailPageComponent,
        EmailPageItemComponent,
        ExamPageComponent,
        ExamBuilderComponent,
        ExamTakingPageComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            multi: true,
            deps: [AppConfigService],
            useFactory: appInit
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
