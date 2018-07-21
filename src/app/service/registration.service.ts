import { Injectable } from '@angular/core';
import { CoreClientService } from './core.client.service';
import { User } from '../models';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class RegistrationService {
    private service: CoreClientService;

    constructor(coreClient: CoreClientService) {
        this.service = coreClient;
    }

    /**
     * @param {User} user
     * @returns {Observable<Object>}
     */
    register(user: User) {
        const params = new HttpParams()
            .set('firstName', user.name)
            .set('secondName', user.surname)
            .set('lastName', user.patronymic)
            .set('email', user.email)
        ;

        return this.service.post('/register', params);
    }
}
