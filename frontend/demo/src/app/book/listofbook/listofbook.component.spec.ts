import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofbookComponent } from './listofbook.component';

describe('ListofbookComponent', () => {
  let component: ListofbookComponent;
  let fixture: ComponentFixture<ListofbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
