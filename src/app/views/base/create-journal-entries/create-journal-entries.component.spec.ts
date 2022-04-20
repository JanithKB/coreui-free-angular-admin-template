import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJournalEntriesComponent } from './create-journal-entries.component';

describe('CreateJournalEntriesComponent', () => {
  let component: CreateJournalEntriesComponent;
  let fixture: ComponentFixture<CreateJournalEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJournalEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJournalEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
