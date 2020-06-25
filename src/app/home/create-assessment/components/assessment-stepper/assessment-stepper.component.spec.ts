import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentStepperComponent } from './assessment-stepper.component';

describe('AssessmentStepperComponent', () => {
  let component: AssessmentStepperComponent;
  let fixture: ComponentFixture<AssessmentStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
