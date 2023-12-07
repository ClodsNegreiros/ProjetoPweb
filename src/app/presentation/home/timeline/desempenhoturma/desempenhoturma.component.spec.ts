import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesempenhoturmaComponent } from './desempenhoturma.component';

describe('DesempenhoturmaComponent', () => {
  let component: DesempenhoturmaComponent;
  let fixture: ComponentFixture<DesempenhoturmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesempenhoturmaComponent]
    });
    fixture = TestBed.createComponent(DesempenhoturmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
