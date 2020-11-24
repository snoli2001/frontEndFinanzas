import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCreditLineComponent } from './new-credit-line.component';

describe('NewCreditLineComponent', () => {
  let component: NewCreditLineComponent;
  let fixture: ComponentFixture<NewCreditLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCreditLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCreditLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
