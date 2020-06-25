import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSetDetailsComponent } from './client-set-details.component';

describe('ClientSetDetailsComponent', () => {
  let component: ClientSetDetailsComponent;
  let fixture: ComponentFixture<ClientSetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
