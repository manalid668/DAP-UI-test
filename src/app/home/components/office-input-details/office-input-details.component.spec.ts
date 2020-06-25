import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeInputDetailsComponent } from './office-input-details.component';

describe('OfficeInputDetailsComponent', () => {
  let component: OfficeInputDetailsComponent;
  let fixture: ComponentFixture<OfficeInputDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeInputDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeInputDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
