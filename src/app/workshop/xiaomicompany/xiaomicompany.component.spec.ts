import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XiaomicompanyComponent } from './xiaomicompany.component';

describe('XiaomicompanyComponent', () => {
  let component: XiaomicompanyComponent;
  let fixture: ComponentFixture<XiaomicompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XiaomicompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XiaomicompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
