import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainNotasComponent } from './maintain-notas.component';

describe('MaintainNotasComponent', () => {
  let component: MaintainNotasComponent;
  let fixture: ComponentFixture<MaintainNotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintainNotasComponent]
    });
    fixture = TestBed.createComponent(MaintainNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
