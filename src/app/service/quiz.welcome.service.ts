import { Injectable } from '@angular/core';
import {CoreClientService} from './core.client.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class QuizWelcomeService {
    private service: CoreClientService;

    constructor(coreClient: CoreClientService) {
        this.service = coreClient;
    }

    /**
     * @returns {Observable<Object>}
     */
    getWelcomePage(): Observable<object> {
        return this.service.get('/gateway')
    }

    /**
     * @returns {Observable}
     */
    sendAgreementSuccess(): Observable<object> {
        return this.service.post('/gateway', []);
    }
}
