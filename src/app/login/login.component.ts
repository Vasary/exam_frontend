import {Component, OnInit} from '@angular/core';
import {LoginService} from '../service/login.service';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../models';
import {AppGlobals} from '../app.globals';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    private service: LoginService;
    private globals: AppGlobals;

    processing: boolean = false;
    messages: Array<string>;

    _login: string;
    _password: string;

    successful: boolean = false;

    constructor(service: LoginService, globals: AppGlobals) {
        this._login = '';
        this._password = '';
        this.service = service;
        this.globals = globals;
    }

    login() {
        this.processing = true;

        this.service.login(this._login, this._password)
            .subscribe(res => this.handleSuccess(res), error => this.handleError(error))
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

    handleSuccess(result) {
        this.messages = [];
        this.processing = false;
        this.successful = true;

        let user = new User();

        user.token = result.token;
        user.name = result.profile['first_name'];
        user.surname = result.profile['second_name'];
        user.patronymic = result.profile['last_name'];

        localStorage.setItem('token', user.token);

        this.globals.user = user;
    }

    ngOnInit() {
    }
}
