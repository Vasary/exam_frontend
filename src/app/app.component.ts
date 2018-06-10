import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LoginService} from './service/login.service';
import {AppState} from './app.state.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
    public title = null;
    public loading: boolean;
    protected service: LoginService;
    protected state: AppState;

    constructor(service: LoginService, state: AppState) {
        this.title = 'Quiz test';
        this.loading = true;
        this.service = service;
        this.state = state;
    }

    async resolve() {
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
