import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainTeacherComponent } from './maintain-teacher.component';

describe('MaintainTeacherComponent', () => {
  let component: MaintainTeacherComponent;
  let fixture: ComponentFixture<MaintainTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintainTeacherComponent]
    });
    fixture = TestBed.createComponent(MaintainTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
