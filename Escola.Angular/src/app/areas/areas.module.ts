import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { AreasComponent } from './areas.component';
import { EscolaComponent } from './escola/escola.component';
import { AlunoComponent } from './aluno/aluno.component';
import { IncluirEscolaComponent } from './incluir-escola/incluir-escola.component';
import { IncluirAlunoComponent } from './incluir-aluno/incluir-aluno.component';


@NgModule({
  declarations: [AreasComponent, EscolaComponent, AlunoComponent, IncluirEscolaComponent, IncluirAlunoComponent],
  imports: [
    CommonModule,
    AreasRoutingModule
  ]
})
export class AreasModule { }
