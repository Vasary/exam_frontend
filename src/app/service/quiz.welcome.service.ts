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
    getWelcomePage() {
        return this.service.get('/gateway')
    }

    /**
     * @returns {Observable}
     */
    sendAgrementSuccess(): Observable {
        return this.service.post('/gateway', []);
    }
}
