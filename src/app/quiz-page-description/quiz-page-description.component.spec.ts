import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPageDescriptionComponent } from './quiz-page-description.component';

describe('QuizPageDescriptionComponent', () => {
  let component: QuizPageDescriptionComponent;
  let fixture: ComponentFixture<QuizPageDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPageDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPageDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
