import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeSetDetailsComponent } from './office-set-details.component';

describe('OfficeSetDetailsComponent', () => {
  let component: OfficeSetDetailsComponent;
  let fixture: ComponentFixture<OfficeSetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeSetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeSetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
