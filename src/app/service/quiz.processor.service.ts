import {Injectable} from '@angular/core';
import {CoreClientService} from './core.client.service';
import {Answer} from '../models';
import {Observable} from 'rxjs/Observable';

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
    sendAnswer(answer: Answer): Observable {
        const data = new FormData();
        data.set('answerUuid', answer.uuid);

        return this.client.post('/gateway', data);
    }

    /**
     * @returns {Observable}
     */
    getQuestion(): Observable {
        return this.client.get('/gateway');
    }
}
