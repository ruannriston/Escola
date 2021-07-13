import { dtoEscola } from './../../model/escola-model';
import { dtoAluno } from './../../model/aluno-model';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  listaAlunos = new Array<dtoAluno>();
  listaAlunosFull = new Array<dtoAluno>();
  model = new dtoAluno();
  editando: boolean = false;
  listaEscolas: [dtoEscola];
  objEscola = new dtoEscola();


  totalRegistros = 1;
  count = 0;
  offset = 0;
  limit = 1;
  qtdPagina = 5;
  itemInicial = 0;
  itemFinal = 0;
  itemTotal = 0;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.carregarAluno();
  }

  carregarAluno() {
    this._appService.getItems("/Aluno/CarregarAluno/").pipe(
      finalize(() => {

      })).subscribe((data: any) => {
        this.listaAlunosFull = data;
        this.paginaAluno();
      }, error => {
        alert(error.error);

      });
  }

  ExcluirAluno(obj: dtoAluno) {
    this._appService.postItems('/Aluno/ExcluirAluno/', obj).pipe(
      finalize(() => {

      })).subscribe((data: any) => {
        alert("Aluno excluída com sucesso.");
        this.carregarAluno();
      }, error => {
        alert(error.error);

      });
  }

  editarAluno(val, obj: dtoAluno) {
    this.editando = val;
    if (val == true) {
      this.model.codAluno = obj.codAluno;
      this.model.nomeAluno = obj.nomeAluno;
      this.model.dtInsercao = obj.dtInsercao;
      this.model.cpf = obj.cpf;
      this.model.codEscola = obj.codEscola;
      this.carregarEscola();
    }
  }

  alterarAluno() {
    this.editando = false;
    this._appService.postItems('/Aluno/AlterarAluno/', this.model).pipe(
      finalize(() => {

      })).subscribe((data: any) => {
        alert("Aluno alterado com sucesso.");
        this.carregarAluno();
      }, error => {
        alert(error.error);
      });
  }


  carregarEscola() {
    this._appService.getItems("/Escola/CarregarEscola/").pipe(
      finalize(() => {

      })).subscribe((data: any) => {
        this.listaEscolas = data;
      }, error => {
        alert(error.error);

      });
  }

  onPageChange(offset) {
    this.offset = offset;
    this.paginaAluno(offset);
  }

  paginaAluno(paginaAtual: number = 0) {
    this.listaAlunos = this.listaAlunosFull.slice((paginaAtual * this.qtdPagina), ((paginaAtual * this.qtdPagina) + this.qtdPagina));
    this.totalRegistros = this.listaAlunosFull.length;
    this.count = (this.totalRegistros / this.qtdPagina);
    this.itemInicial = this.qtdPagina * (paginaAtual) + 1;
    this.itemFinal = (this.qtdPagina * (paginaAtual)) + (this.listaAlunos.length);
    this.itemTotal = this.totalRegistros;
  }

}
