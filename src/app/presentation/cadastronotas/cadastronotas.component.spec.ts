import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastronotasComponent } from './cadastronotas.component';

describe('CadastronotasComponent', () => {
  let component: CadastronotasComponent;
  let fixture: ComponentFixture<CadastronotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastronotasComponent]
    });
    fixture = TestBed.createComponent(CadastronotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
