import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayShroffCounterComponent } from './pay-shroff-counter.component';

describe('PayShroffCounterComponent', () => {
  let component: PayShroffCounterComponent;
  let fixture: ComponentFixture<PayShroffCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayShroffCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayShroffCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
