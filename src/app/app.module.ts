import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { RegistrationService } from "./service/registration.service";
import { AuthGuard, LoggedGuard } from "./middleware";
import { AppRoutes } from "./app.routing";
import { CoreClientService } from "./service/core.client.service";
import { HttpClientModule } from "@angular/common/http";
import { QuizComponent } from './quiz/quiz.component';
import { QuizPageDescriptionComponent } from './quiz-page-description/quiz-page-description.component';
import { QuizGetResultComponent } from './quiz-get-result/quiz-get-result.component';
import { AppGlobals } from './app.globals';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        RegisterComponent,
        LoginComponent,
        QuizComponent,
        QuizPageDescriptionComponent,
        QuizGetResultComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutes,
        HttpClientModule
    ],
    providers: [
        RegistrationService,
        CoreClientService,
        AuthGuard,
        AppGlobals,
        LoggedGuard
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
}
