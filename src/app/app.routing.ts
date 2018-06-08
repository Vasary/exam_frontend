import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard, LoggedGuard} from './middleware';
import {QuizComponent} from './quiz/quiz.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ResolverComponent} from './resolver/resolver.component';

const appRoutes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'quiz', component: QuizComponent, canActivate: [AuthGuard]},
    {path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]},
    {path: '', component: ResolverComponent, pathMatch: 'full'},
    {path: '**', component: ResolverComponent, pathMatch: 'full'}
];

export const AppRoutes = RouterModule.forRoot(appRoutes, {enableTracing: false});