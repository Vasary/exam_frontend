import { Injectable } from '@angular/core';
import { CoreClientService } from './core.client.service';
import { Answer } from '../models';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class QuizProcessorService {
    private client: CoreClientService;

    constructor(client: CoreClientService) {
        this.client = client;
    }

    /**
     * @param {Answer} answer
     * @returns {Observable}
     */
    sendAnswer(answer: Answer): Observable<object> {
        const params = new HttpParams().set('value', answer.uuid);

        return this.client.post('/gateway', params);
    }

    /**
     * @returns {Observable}
     */
    sendSkip(): Observable<object> {
        const params =
            new HttpParams()
                .set('skip', 'true')
        ;

        return this.client.post('/gateway', params);
    }

    /**
     * @returns {Observable}
     */
    getQuestion(): Observable<object> {
        return this.client.get('/gateway');
    }
}
