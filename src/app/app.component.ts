import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { AppState } from './app.state.service';
import { environment } from 'environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
    public title;
    public loading: boolean;

    protected service: LoginService;
    protected state: AppState;

    constructor(service: LoginService, state: AppState) {
        this.title = 'Тестирование';
        this.loading = true;
        this.service = service;
        this.state = state;

        this.displayInitMessage();
    }

    displayInitMessage(): void {
        console.log('Application name: ' + environment.name);
        console.log('Application version: ' + environment.version);
        console.log('Author: ' + environment.author);
    }

    async resolve(): Promise<void> {
        this.loading = true;
        await this.service.updateState();
        this.loading = false;
    }

    async ngOnInit() {
        await this.resolve();
    }

    ngAfterViewInit() {
    }
}
