import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninteacherComponent } from './signinteacher.component';

describe('SigninteacherComponent', () => {
  let component: SigninteacherComponent;
  let fixture: ComponentFixture<SigninteacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninteacherComponent]
    });
    fixture = TestBed.createComponent(SigninteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
