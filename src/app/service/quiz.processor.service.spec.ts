import { TestBed, inject } from '@angular/core/testing';

import { QuizProcessorService } from './quiz.processor.service';

describe('Quiz.ProcessorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Quiz.ProcessorService]
    });
  });

  it('should be created', inject([QuizProcessorService], (service: QuizProcessorService) => {
    expect(service).toBeTruthy();
  }));
});
