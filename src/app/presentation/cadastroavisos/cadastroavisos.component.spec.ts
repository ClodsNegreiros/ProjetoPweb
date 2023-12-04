import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroavisosComponent } from './cadastroavisos.component';

describe('CadastroavisosComponent', () => {
  let component: CadastroavisosComponent;
  let fixture: ComponentFixture<CadastroavisosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroavisosComponent]
    });
    fixture = TestBed.createComponent(CadastroavisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
