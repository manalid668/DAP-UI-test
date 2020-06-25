import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSelectionComponent } from './assessment-selection.component';

describe('AssessmentSelectionComponent', () => {
  let component: AssessmentSelectionComponent;
  let fixture: ComponentFixture<AssessmentSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
