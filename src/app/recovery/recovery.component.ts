import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RecoveryService } from '../service/recovery.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

    private service: RecoveryService;

    public processing: boolean;
    public successful: boolean;
    private active: boolean;

    public messages: Array<string>;

    public _email: string;

    constructor(service: RecoveryService) {
        this._email = '';
        this.service = service;
        this.processing = false;
        this.successful = false;
        this.active = true;
    }

    recovery() {
        this.processing = true;

        this.service.recovery(this._email)
            .subscribe(
                res => this.handleSuccess(res),
                error => this.handleError(error)
            )
        ;
    }

    /**
     * @param {HttpErrorResponse} err
     */
    handleError(err: HttpErrorResponse) {
        this.messages = [];

        if (!Array.isArray(err.error['message'])) {
            this.messages = [err.error['message']];
        } else {
            this.messages = err.error['message'];
        }

        this.processing = false;
    }

    /**
     * @param {object} result
     */
    handleSuccess(result: object) {
        this.messages = [];
        this.processing = false;
        this.successful = true;

        this.messages = ['Запрос на восстановление доступа отправлен. Проверьте свой почтовый ящик'];

        this.active = false;
    }

    ngOnInit() {
    }

}
