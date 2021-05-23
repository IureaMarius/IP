import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LearningPageComponent } from '../learning-page/learning-page.component';
import { SubjectPageComponent } from '../subject-page/subject-page.component';
import { ForumBoardsComponent } from '../forum-boards/forum-boards.component';
import { ForumBoardPostsComponent } from '../forum-board-posts/forum-board-posts.component';
import { ForumCommentsComponent } from '../forum-comments/forum-comments.component';
import { ForumUserComponent } from '../forum-user/forum-user.component';
import { EmailPageComponent } from '../email-page/email-page.component';
import { ExamPageComponent } from '../exam-page/exam-page.component';
import { ExamBuilderComponent } from '../exam-builder/exam-builder.component';
import { EmailPageItemComponent } from '../email-page-item/email-page-item.component';
import { ExamTakingPageComponent } from '../exam-taking-page/exam-taking-page.component';
import {ExamStatisticsComponent} from '../exam-statistics/exam-statistics.component';
import {ExamAssignPageComponent} from '../exam-assign-page/exam-assign-page.component';
import {StudentExamSelectorComponent} from '../student-exam-selector/student-exam-selector.component';
import {SubjectAdderComponent} from '../subject-adder/subject-adder.component';
import {EmailWritingPageComponent} from '../email-writing-page/email-writing-page.component';
import {EmailConfigPageComponent} from '../email-config-page/email-config-page.component';
import {ExamResultsComponent} from '../exam-results/exam-results.component';
import {ExamGraderStudentsComponent} from '../exam-grader-students/exam-grader-students.component';
import {ExamGraderQuestionsComponent} from '../exam-grader-questions/exam-grader-questions.component';

const routes: Routes = [
    { path: 'email-config', component: EmailConfigPageComponent},
    { path: 'email', component: EmailPageComponent },
    { path: 'email-item', component: EmailPageItemComponent },
    { path: 'exam', component: ExamPageComponent },
    { path: 'exam-build/assign/:id', component: ExamAssignPageComponent },
    { path: 'exam-build/:id', component: ExamBuilderComponent },
    { path: 'exam-taking-page/:id', component: ExamTakingPageComponent },
    { path: 'forum/user/:id', component: ForumUserComponent },
    { path: 'forum/board/:id/:postId', component: ForumCommentsComponent },
    { path: 'forum/board/:id', component: ForumBoardPostsComponent },
    { path: 'forum', component: ForumBoardsComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'subjects', component: LearningPageComponent },
    { path: 'subject/add/:id', component: SubjectAdderComponent},
    { path: 'subject/:id', component: SubjectPageComponent },
    { path: '', component: LoginPageComponent },
    { path: 'exam/stats', component: ExamStatisticsComponent },
    { path: 'exam/list', component: ExamGraderStudentsComponent},
    { path: 'exam/assign/:id', component: ExamAssignPageComponent },
    { path: 'examSelect', component: StudentExamSelectorComponent },
    { path: 'exam/list/questions', component: ExamGraderQuestionsComponent},
    { path: 'emailWrite', component: EmailWritingPageComponent},
    { path: 'examResults/:id', component: ExamResultsComponent}
];



@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
        CommonModule
    ],
    exports: [RouterModule]
})
export class RoutingModule { }
