import { Injectable } from '@angular/core';
import { CoreClientService } from './core.client.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecoveryService {

    private service: CoreClientService;
    /**
     * @param {CoreClientService} coreClient
     */
    constructor(coreClient: CoreClientService) {
        this.service = coreClient;
    }

    /**
     * @param {string} email
     * @returns {Observable<object>}
     */
    recovery(email: string): Observable<object> {
        const params =
            new HttpParams()
                .set('email', email)
        ;

        return this.service.post('/recovery', params);
    }
}
