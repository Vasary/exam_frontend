import {Injectable} from '@angular/core';
import {CoreClientService} from './core.client.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
    private service: CoreClientService;

    /**
     * @param {CoreClientService} coreClient
     */
    constructor(coreClient: CoreClientService) {
        this.service = coreClient;
    }

    /**
     * @param {string} login
     * @param {string} password
     * @returns {Observable<Object>}
     */
    login(login: string, password: string): Observable {
        const formData = new FormData();

        formData.append('login', login);
        formData.append('password', password);

        return this.service.post('/login', formData);
    }
}
