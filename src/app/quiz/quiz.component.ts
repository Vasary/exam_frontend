import {Component, OnInit} from '@angular/core';
import {Answer, Banner} from '../models';
import {HttpErrorResponse} from '@angular/common/http';
import {QuizProcessorService} from '../service/quiz.processor.service';
import {ResolverService} from '../service/resolver.service';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
    private service: QuizProcessorService;

    private text: string;
    private answers: Array<Answer>;

    private processing: boolean;
    private showBanner: boolean;

    private questionAnswer: Answer;

    private resolver: ResolverService;
    private banner: Banner;

    constructor(service: QuizProcessorService, resolver: ResolverService) {
        this.processing = true;
        this.showBanner = false;

        this.service = service;
        this.resolver = resolver;
        this.banner = new Banner();
    }

    sendSkip(): void {
        this.processing = true;

        this.service.sendSkip().subscribe(
            (result) => {
                    this.handleResult(result);
                },
            (error) => {
                this.handleError(error);
            }
        );
    }

    sendAnswer() {
        if (null !== this.questionAnswer) {
            this.processing = true;

            this.service.sendAnswer(this.questionAnswer).subscribe(
                (result) => {
                    this.handleResult(result);
                },
                (error) => {
                    this.handleError(error);
                }
            )
        ;
        } else {
            alert('Выберите ответ');
        }
    }

    handleResult(result: object): void {
        // if show banner!

        this.getQuestion();
    }

    setAnswer(answer: Answer) {
        this.questionAnswer = answer;
    }

    getQuestion(): void {
        this.processing = true;
        this.answers = [];
        this.questionAnswer = null;

        this.service.getQuestion().subscribe(
            res => this.handleSuccess(res),
            err => this.handleError(err)
        );
    }

    handleAdv(response: object): void {
        this.processing = true;
        this.showBanner = true;

        const banner = new Banner();

        banner.text = 'Example';
        banner.link = 'assets/images/banner_example.jpg';
        this.banner = banner;
    }

    handleSuccess(response: object): void {
        if (response.hasOwnProperty('next')) {
            this.resolver.resolve(response['next']);

            return;
        }

        this.text = response['question'];
        this.answers = [];

        for (const uuid in response['answers']) {
            if (response['answers'].hasOwnProperty(uuid)) {
                const answer = new Answer();
                answer.uuid = uuid;
                answer.text = response['answers'][uuid];

                this.answers.push(answer);
            }
        }

        this.processing = false;
    }

    handleError(error: HttpErrorResponse) {
        this.processing = false;
        this.text = error.message;
    }

    ngOnInit() {
        this.getQuestion();
    }
}
