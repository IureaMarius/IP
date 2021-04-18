import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LearningPageComponent } from '../learning-page/learning-page.component';
import { SubjectPageComponent } from '../subject-page/subject-page.component';
import { ForumBoardsComponent } from '../forum-boards/forum-boards.component';
import { ForumBoardPostsComponent } from '../forum-board-posts/forum-board-posts.component';

const routes: Routes = [
    { path: 'forum/board/:id', component: ForumBoardPostsComponent },
    { path: 'forum', component: ForumBoardsComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'subjects', component: LearningPageComponent },
    { path: 'subject', component: SubjectPageComponent },
    { path: '', component: LoginPageComponent }
];



@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes),
      CommonModule
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
