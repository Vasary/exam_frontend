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
     * @returns {Observable<Object>}
     */
    getAbout(): Observable<object> {
        return this.service.get('/page/about');
    }
}
