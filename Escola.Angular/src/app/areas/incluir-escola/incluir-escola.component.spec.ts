import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirEscolaComponent } from './incluir-escola.component';

describe('IncluirEscolaComponent', () => {
  let component: IncluirEscolaComponent;
  let fixture: ComponentFixture<IncluirEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
