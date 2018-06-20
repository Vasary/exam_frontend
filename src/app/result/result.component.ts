import { Component, OnInit } from '@angular/core';
import { CoreClientService } from '../service/core.client.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ResolverService } from '../service/resolver.service';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
    public processing: boolean;
    public error: boolean;

    private message: string;
    private total: number;
    private correct: number;
    private time: string;

    private service: CoreClientService;
    private resolver: ResolverService;

    constructor(service: CoreClientService, resolver: ResolverService) {
        this.service = service;
        this.resolver = resolver;

        this.processing = true;
        this.error = false;
        this.total = 0;
        this.correct = 0;
    }

    /**
     * @returns void
     */
    getResult(): void {
        this.processing = true;
        this.service.get('/gateway').subscribe(
            (result) => {
                this.handleSuccess(result);
            },
            (error) => {
                this.handleError(error);
            }
        );
    }

    /**
     * @returns void
     */
    finish(): void {
        this.processing = true;
        this.service.post('/gateway', []).subscribe(
            (result) => {
                this.processing = false;
                this.resolver.resolve(result['next']);
            },
            (error) => {
                this.handleError(error);
            }
        );
    }

    /**
     * @param {object} result
     */
    handleSuccess(result: object) {
        this.processing = false;
        this.message = '';
        this.error = false;

        this.total = result['questions'];
        this.correct = result['correct'];
        this.time = result['time'];
    }

    /**
     * @param {HttpErrorResponse} err
     */
    handleError(err: HttpErrorResponse) {
        this.processing = false;
        this.message = err.message;
        this.error = true;
    }

    ngOnInit() {
        this.getResult();
    }
}
