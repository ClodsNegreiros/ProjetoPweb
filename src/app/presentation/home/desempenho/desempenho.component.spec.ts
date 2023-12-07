import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesempenhoComponent } from './desempenho.component';

describe('DesempenhoComponent', () => {
  let component: DesempenhoComponent;
  let fixture: ComponentFixture<DesempenhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesempenhoComponent]
    });
    fixture = TestBed.createComponent(DesempenhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
