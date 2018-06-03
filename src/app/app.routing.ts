import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard, LoggedGuard} from './middleware';
import {QuizComponent} from './quiz/quiz.component';
import {QuizPageDescriptionComponent} from './quiz-page-description/quiz-page-description.component';
import {QuizGetResultComponent} from './quiz-get-result/quiz-get-result.component';

const appRoutes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'register', component: RegisterComponent, canActivate: [LoggedGuard]},
    {path: 'login', component: LoginComponent, canActivate: [LoggedGuard]},
    {path: 'quiz/process', component: QuizComponent, canActivate: [AuthGuard]},
    {path: 'quiz/description', component: QuizPageDescriptionComponent, canActivate: [AuthGuard]},
    {path: 'quiz/result', component: QuizGetResultComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/about', pathMatch: 'full'},
    {path: '**', redirectTo: '/about', pathMatch: 'full'}
];

export const AppRoutes = RouterModule.forRoot(appRoutes, {enableTracing: true});