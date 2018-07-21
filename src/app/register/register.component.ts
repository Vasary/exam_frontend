import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { User } from '../models';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppState } from '../app.state.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    _name: string;
    _surname: string;
    _patronymic: string;
    _email: string;

    messages: Array<string> = [];

    processing: boolean;
    successful: boolean;

    login: string = null;
    password: string = null;

    service: RegistrationService;

    router: Router;

    globals: AppState;

    constructor(service: RegistrationService, router: Router, globals: AppState) {
        this.service = service;
        this.router = router;
        this.globals = globals;
        this._name = '';
        this._surname = '';
        this._patronymic = '';
        this.processing = false;
        this.successful = false;
    }

    registerUser(): void {
        this.processing = true;

        const user = new User();

        user.name = this._name;
        user.surname = this._surname;
        user.patronymic = this._patronymic;
        user.email = this._email;

        this.service.register(user).subscribe(res => this.handleSuccess(res, user), error => this.handleError(error));
    }

    /**
     *
     * @param {HttpErrorResponse} err
     */
    handleError(err: HttpErrorResponse) {
        this.messages = [];

        if (!Array.isArray(err.error['message'])) {
            this.messages = [err.error['message']];
        } else {
            this.messages = err.error['message'];
        }

        this.processing = false;
    }

    /**
     * @param result
     * @param {User} user
     */
    handleSuccess(result, user: User) {

        this.messages = [];
        this.processing = false;

        this.successful = true;

        this.login = result.access['login'];
        this.password = result.access['password'];

        user.token = result.token;
        localStorage.setItem('token', user.token);

        this.globals.user = user;
    }

    ngOnInit() {
    }
}
