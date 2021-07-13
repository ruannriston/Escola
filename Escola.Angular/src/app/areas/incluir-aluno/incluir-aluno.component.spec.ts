import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirAlunoComponent } from './incluir-aluno.component';

describe('IncluirAlunoComponent', () => {
  let component: IncluirAlunoComponent;
  let fixture: ComponentFixture<IncluirAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
