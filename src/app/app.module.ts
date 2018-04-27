import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: '**', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
