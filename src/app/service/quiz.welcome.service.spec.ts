import { inject, TestBed } from '@angular/core/testing';

import { QuizWelcomeService } from './quiz.welcome.service';

describe('Quiz.WelcomeService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [Quiz.WelcomeService]
        });
    });

    it('should be created', inject([QuizWelcomeService], (service: QuizWelcomeService) => {
        expect(service).toBeTruthy();
    }));
});
