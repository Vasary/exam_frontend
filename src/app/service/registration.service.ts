import {Injectable} from '@angular/core';
import {CoreClientService} from './core.client.service';
import {User} from '../models';

@Injectable()
export class RegistrationService {

    private service: CoreClientService;

    constructor(coreClient: CoreClientService) {
        this.service = coreClient;
    }

    register(user: User) {
        const formData = new FormData();

        formData.append('firstName', user.name);
        formData.append('secondName', user.surname);
        formData.append('lastName', user.patronymic);

        return this.service.post('http://localhost:81/register', formData);
    }
}
