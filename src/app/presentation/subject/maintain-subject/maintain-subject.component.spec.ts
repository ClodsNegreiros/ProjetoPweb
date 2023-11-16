import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainSubjectComponent } from './maintain-subject.component';

describe('MaintainSubjectComponent', () => {
  let component: MaintainSubjectComponent;
  let fixture: ComponentFixture<MaintainSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintainSubjectComponent]
    });
    fixture = TestBed.createComponent(MaintainSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
