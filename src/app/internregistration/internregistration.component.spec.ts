import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternregistrationComponent } from './internregistration.component';

describe('InternregistrationComponent', () => {
  let component: InternregistrationComponent;
  let fixture: ComponentFixture<InternregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
