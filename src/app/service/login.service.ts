import { Injectable } from '@angular/core';
import {CoreClientService} from './core.client.service';

@Injectable()
export class LoginService {

    private service: CoreClientService;

    constructor(coreClient: CoreClientService) {
        this.service = coreClient;
    }

    login(login: string, password: string) {
        const formData = new FormData();

        formData.append('login', login);
        formData.append('password', password);

        return this.service.post('http://localhost:81/login', formData);
    }
}
