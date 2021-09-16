import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditbookComponent } from './addoreditbook.component';

describe('AddoreditbookComponent', () => {
  let component: AddoreditbookComponent;
  let fixture: ComponentFixture<AddoreditbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoreditbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoreditbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
