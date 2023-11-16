import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubjectComponent } from './list-subject.component';

describe('ListSubjectComponent', () => {
  let component: ListSubjectComponent;
  let fixture: ComponentFixture<ListSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSubjectComponent]
    });
    fixture = TestBed.createComponent(ListSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
