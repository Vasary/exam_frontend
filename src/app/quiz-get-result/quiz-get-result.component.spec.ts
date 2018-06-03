import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizGetResultComponent } from './quiz-get-result.component';

describe('QuizGetResultComponent', () => {
  let component: QuizGetResultComponent;
  let fixture: ComponentFixture<QuizGetResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizGetResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizGetResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
