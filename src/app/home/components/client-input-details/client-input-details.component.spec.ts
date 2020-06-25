import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInputDetailsComponent } from './client-input-details.component';

describe('ClientInputDetailsComponent', () => {
  let component: ClientInputDetailsComponent;
  let fixture: ComponentFixture<ClientInputDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInputDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInputDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
