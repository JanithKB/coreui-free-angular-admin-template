import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVoucherDetailsComponent } from './view-voucher-details.component';

describe('ViewVoucherDetailsComponent', () => {
  let component: ViewVoucherDetailsComponent;
  let fixture: ComponentFixture<ViewVoucherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVoucherDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVoucherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
