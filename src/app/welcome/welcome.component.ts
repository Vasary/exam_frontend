import {Component, OnInit} from '@angular/core';
import {QuizWelcomeService} from '../service/quiz.welcome.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {ResolverService} from '../service/resolver.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    private service: QuizWelcomeService;
    public text: string;
    public title: string;
    public processing: boolean;
    private router: Router;
    private resolver: ResolverService;

    constructor(service: QuizWelcomeService, router: Router, resolver: ResolverService) {
        this.service = service;
        this.text = '';
        this.title = '';
        this.router = router;
        this.resolver = resolver;
        this.processing = true;
    }

    /**
     * @return void
     */
    sendAgreement(): void {
        this.processing = true;

        this.service.sendAgreementSuccess().subscribe(
            (result) => {
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
        this.text = result['text'];
        this.title = result['title'];

        this.processing = false;
    }

    /**
     * @param {HttpErrorResponse} err
     */
    handleError(err: HttpErrorResponse) {
        this.processing = false;
    }

    ngOnInit() {
        this.service.getWelcomePage().subscribe(res => this.handleSuccess(res), err => this.handleError(err));
    }
}
