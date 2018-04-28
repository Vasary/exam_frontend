import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { RegistrationService } from "./service/registration.service";
import { AuthGuard } from "./middleware";
import { AppRoutes } from "./app.routing";
import { TestComponent } from './test/test.component';
import { CoreClientService } from "./service/core.client.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        RegisterComponent,
        LoginComponent,
        TestComponent
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
        AuthGuard
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
}
