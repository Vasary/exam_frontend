import { Injectable } from '@angular/core';
import { CoreClientService } from './core.client.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PageService {
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
    getAbout(login: string, password: string): Observable<object> {
        return this.service.get('/page/about');
    }
}
