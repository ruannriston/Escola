import { IncluirEscolaComponent } from './areas/incluir-escola/incluir-escola.component';
import { IncluirAlunoComponent } from './areas/incluir-aluno/incluir-aluno.component';
import { AlunoComponent } from './areas/aluno/aluno.component';
import { AppService } from './services/app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { EscolaComponent } from './areas/escola/escola.component';
import { PaginatorModule } from './diretivas/paginator/paginator.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    EscolaComponent,
    AlunoComponent,
    IncluirEscolaComponent,
    IncluirAlunoComponent
  ],
  exports:[
    PaginatorModule
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    PaginatorModule,
    RouterModule.forRoot([
      { path: '', component: EscolaComponent, pathMatch: 'full' },
      { path: 'escola', component: EscolaComponent },
      { path: 'aluno', component: AlunoComponent },
      { path: 'incluir-aluno', component: IncluirAlunoComponent },
      { path: 'incluir-escola', component: IncluirEscolaComponent },
    ])
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
