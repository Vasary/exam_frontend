import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './middleware';
import {QuizComponent} from './quiz/quiz.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ResolverComponent} from './resolver/resolver.component';
import {ResultComponent} from './result/result.component';
import {QuizSpawnComponent} from './quiz.spawn/quiz.spawn.component';
import {LogoutComponent} from './logout/logout.component';

const appRoutes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]},

    {path: 'register', component: RegisterComponent},

    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},

    {path: 'quiz', component: QuizComponent, canActivate: [AuthGuard]},
    {path: 'quiz/result', component: ResultComponent, canActivate: [AuthGuard]},
    {path: 'quiz/spawn', component: QuizSpawnComponent, canActivate: [AuthGuard]},

    {path: '', component: ResolverComponent, pathMatch: 'full'},
    {path: '**', component: ResolverComponent, pathMatch: 'full'}
];

export const AppRoutes = RouterModule.forRoot(appRoutes, {enableTracing: false});
