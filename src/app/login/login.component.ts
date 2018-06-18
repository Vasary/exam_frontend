import {Component, OnInit} from '@angular/core';
import {LoginService} from '../service/login.service';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../models';
import {AppState} from '../app.state.service';
import {ResolverService} from '../service/resolver.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    private service: LoginService;
    private appState: AppState;

    private processing: boolean;
    private successful: boolean;

    private messages: Array<string>;

    private _login: string;
    private _password: string;

    private resolver: ResolverService;

    constructor(service: LoginService, globals: AppState, resolver: ResolverService) {
        this._login = '';
        this._password = '';
        this.service = service;
        this.appState = globals;
        this.resolver = resolver;
        this.processing = false;
        this.successful = false;
    }

    login() {
        this.processing = true;

        this.service.login(this._login, this._password)
            .subscribe(
                res => this.handleSuccess(res),
                error => this.handleError(error)
            )
        ;
    }

    handleError(err: HttpErrorResponse) {
        this.messages = [];

        if (!Array.isArray(err.error['message'])) {
            this.messages = [err.error['message']];
        } else {
            this.messages = err.error['message'];
        }

        this.processing = false;
    }

    handleSuccess(result: object) {
        this.messages = [];
        this.processing = false;
        this.successful = true;

        let user = new User();

        user.token = result['token'];
        user.name = result['profile']['first_name'];
        user.surname = result['profile']['second_name'];
        user.patronymic = result['profile']['last_name'];

        localStorage.setItem('token', user.token);

        this.appState.user = user;

        this.resolver.resolve(result['scenario']);
    }

    ngOnInit() {
    }
}
