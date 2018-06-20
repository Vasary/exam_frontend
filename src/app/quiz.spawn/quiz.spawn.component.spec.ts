import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('Quiz.SpawnComponent', () => {
    let component: Quiz.SpawnComponent;
    let fixture: ComponentFixture<Quiz.SpawnComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Quiz.SpawnComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Quiz.SpawnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
