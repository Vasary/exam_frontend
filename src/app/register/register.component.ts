import { Component, OnInit } from '@angular/core';
import { RegistrationService } from "../service/registration.service";
import { User } from "../models";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: [ './register.component.css' ]
})

export class RegisterComponent implements OnInit {
    _name: string;
    _surname: string;
    _patronymic: string;

    message: string;
    showAlert: boolean = false;

    service: RegistrationService;

    constructor(service: RegistrationService) {
        this.service = service;
    }

    registerUser() {
        this.showAlert = true;
        this.message = "Обработка данных";

        let user = new User();

        user.name = this._name;
        user.surname = this._surname;
        user.patronymic = this._patronymic;

        this.service.register(user)
    }

    ngOnInit() {
    }
}
