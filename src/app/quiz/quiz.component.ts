import {Component, OnInit} from '@angular/core';
import {Answer} from '../models';
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

    public processing: boolean = false;

    private questionAnswer: Answer;
    private resolver: ResolverService;

    constructor(service: QuizProcessorService, resolver: ResolverService) {
        this.service = service;
        this.resolver = resolver;
    }

    sendSkip() {
        alert("Не доступно в режиме тестирования");
    }

    sendAnswer() {
        if (null !== this.questionAnswer) {
            this.processing = true;

            this.service.sendAnswer(this.questionAnswer)
                .subscribe(
                    (result) => {
                        if (result['result'] === 'success') {
                            this.getQuestion()
                        } else {
                            this.processing = false;
                        }
                    },
                    (error) => {
                        this.handleError(error)
                    }
                );
        }
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

    handleSuccess(response: object): void {
        if (response.hasOwnProperty('next')) {
            this.resolver.resolve(response['next']);

            return;
        }

        this.text = response['question'];
        this.answers = [];

        for (let uuid in response['answers']) {

            let answer = new Answer();
            answer.uuid = uuid;
            answer.text = response['answers'][uuid];

            this.answers.push(answer);
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
