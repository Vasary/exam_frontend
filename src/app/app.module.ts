import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from './service/registration.service';
import { AuthGuard, LoggedGuard } from './middleware';
import { AppRoutes } from './app.routing';
import { CoreClientService } from './service/core.client.service';
import { HttpClientModule } from '@angular/common/http';
import { QuizComponent } from './quiz/quiz.component';
import { AppState } from './app.state.service';
import { LoginService } from './service/login.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuizWelcomeService } from './service/quiz.welcome.service';
import { QuizProcessorService } from './service/quiz.processor.service';
import { ResolverComponent } from './resolver/resolver.component';
import { ResolverService } from './service/resolver.service';
import { ResultComponent } from './result/result.component';
import { QuizSpawnComponent } from './quiz.spawn/quiz.spawn.component';
import { LogoutComponent } from './logout/logout.component';
import { TimerService } from './service/timer.service';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        RegisterComponent,
        LoginComponent,
        QuizComponent,
        WelcomeComponent,
        ResolverComponent,
        ResultComponent,
        QuizSpawnComponent,
        LogoutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutes,
        HttpClientModule
    ],
    providers: [
        RegistrationService,
        LoginService,
        CoreClientService,
        AuthGuard,
        AppState,
        LoggedGuard,
        QuizWelcomeService,
        QuizProcessorService,
        ResolverService,
        TimerService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
