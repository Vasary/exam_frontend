import { Component, OnInit } from '@angular/core';
import { Answer, Banner } from '../models';
import { HttpErrorResponse } from '@angular/common/http';
import { QuizProcessorService } from '../service/quiz.processor.service';
import { ResolverService } from '../service/resolver.service';
import { TimerService } from '../service/timer.service';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
    public answers: Array<Answer>;

    public processing: boolean;
    public showBanner: boolean;

    private service: QuizProcessorService;
    private resolver: ResolverService;
    private banner: Banner;
    private timer: TimerService;

    private questionAnswer: Answer;

    private text: string;
    private allowSkip: boolean;
    private promoTimer: string;

    constructor(service: QuizProcessorService, resolver: ResolverService, timer: TimerService) {
        this.processing = true;
        this.showBanner = false;
        this.allowSkip = false;

        this.promoTimer = '';

        this.service = service;
        this.resolver = resolver;
        this.banner = new Banner();
        this.timer = timer;
    }

    sendSkip(): void {
        this.processing = true;

        if (!this.allowSkip) {
            alert('Skip not allowed for this question');
        }

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

        banner.text = response['text'];
        banner.altText = response['alt_text'];
        banner.src = response['image'];
        banner.showTime = parseInt(response['show_time'], 10);

        this.setPromoTimer(banner);

        this.banner = banner;
    }

    setPromoTimer(banner: Banner): void {
        this.timer.countDown(
            banner.showTime,
            () => {
                this.showBanner = false;
            },
            (minutes, seconds) => {
                this.promoTimer = minutes + ':' + seconds;
            }
        );
    }

    handleSuccess(response: object): void {
        if (response.hasOwnProperty('next')) {
            this.resolver.resolve(response['next']);

            return;
        }

        if (response.hasOwnProperty('promotion')) {
            this.handleAdv(response['promotion']);
        }

        const quizData = response['quiz'];

        this.text = quizData['question'];
        this.answers = [];

        this.allowSkip = quizData['canBeSkipped'] === true;

        for (const uuid in quizData['answers']) {
            if (quizData['answers'].hasOwnProperty(uuid)) {
                const answer = new Answer();
                answer.uuid = uuid;
                answer.text = quizData['answers'][uuid];

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
