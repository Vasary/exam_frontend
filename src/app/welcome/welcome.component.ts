import {Component, OnInit} from '@angular/core';
import {QuizWelcomeService} from '../service/quiz.welcome.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    private service: QuizWelcomeService;
    private text: string;
    private title: string;
    private processing: boolean = true;
    private messages: [string] = [];
    private router: Router;

    constructor(service: QuizWelcomeService, router: Router) {
        this.service = service;
        this.text = '';
        this.title = '';
        this.router = router;
    }

    /**
     * @return void
     */
    sendAgreement(): void {
        this.processing = true;

        this.service.sendAgrementSuccess().subscribe(
            () => {
                this.router.navigate(['/quiz']);
            },
            (error) => {
                this.handleError(error)
            }
        )
    }

    /**
     * @param {object} result
     */
    handleSuccess(result: object) {
        this.messages = [];
        this.text = result.text;
        this.title = result.title;

        this.processing = false;
    }

    /**
     * @param {HttpErrorResponse} err
     */
    handleError(err: HttpErrorResponse) {
        if (!Array.isArray(err.error['message'])) {
            this.messages = [err.error['message']];
        } else {
            this.messages = err.error['message'];
        }

        this.processing = false;
    }

    ngOnInit() {
        this.service.getWelcomePage().subscribe(res => this.handleSuccess(res), err => this.handleError(err));
    }
}
