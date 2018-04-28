import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./middleware";
import {TestComponent} from "./test/test.component";

const appRoutes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    // {path: 'test', component: TestComponent, canActivate: AuthGuard},
    {path: '', redirectTo: '/about', pathMatch: 'full'},
    {path: '**', redirectTo: '/about', pathMatch: 'full'}
];

export const AppRoutes = RouterModule.forRoot(appRoutes, {enableTracing: true});