import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosalunoComponent } from './avisosaluno.component';

describe('AvisosalunoComponent', () => {
  let component: AvisosalunoComponent;
  let fixture: ComponentFixture<AvisosalunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisosalunoComponent]
    });
    fixture = TestBed.createComponent(AvisosalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
