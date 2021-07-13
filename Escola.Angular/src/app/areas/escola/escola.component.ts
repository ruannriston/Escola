import { dtoEscola } from './../../model/escola-model';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent implements OnInit {

  listaEscolas = new Array<dtoEscola>();
  listaEscolasFull = new Array<dtoEscola>();
  model = new dtoEscola();
  editando: boolean = false;

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
    this.carregarEscola();
  }

  carregarEscola() {
    this._appService.getItems("/Escola/CarregarEscola/").pipe(
      finalize(() => {

      })).subscribe((data: any) => {
        console.log(data);
        this.listaEscolasFull = data;
        this.paginaEscola();
      }, error => {
        alert(error.error);

      });
  }

  ExcluirEscola(obj: dtoEscola) {
    this._appService.postItems('/Escola/ExcluirEscola/', obj).pipe(
      finalize(() => {

      })).subscribe((data: any) => {
        alert("Escola excluída com sucesso.");
        this.carregarEscola();
      }, error => {
        alert("Não é possível deletar escola com aluno vinculado.");

      });
  }

  editarEscola(val, obj: dtoEscola) {
    this.editando = val;
    if (val == true) {
      this.model.codEscola = obj.codEscola;
      this.model.nomeEscola = obj.nomeEscola;
      this.model.dtInsercao = obj.dtInsercao;
      this.model.cnpj = obj.cnpj;
    }
  }

  alterarEscola() {
    this.editando = false;
    this._appService.postItems('/Escola/AlterarEscola/', this.model).pipe(
      finalize(() => {

      })).subscribe((data: any) => {
        alert("Escola alterada com sucesso.");
        this.carregarEscola();
      }, error => {
        alert(error.error);

      });
  }

  onPageChange(offset) {
    this.offset = offset;
    this.paginaEscola(offset);
  }

  paginaEscola(paginaAtual: number = 0) {
    this.listaEscolas = this.listaEscolasFull.slice((paginaAtual * this.qtdPagina), ((paginaAtual * this.qtdPagina) + this.qtdPagina));
    this.totalRegistros = this.listaEscolasFull.length;
    this.count = (this.totalRegistros / this.qtdPagina);
    this.itemInicial = this.qtdPagina * (paginaAtual) + 1;
    this.itemFinal = (this.qtdPagina * (paginaAtual)) + (this.listaEscolas.length);
    this.itemTotal = this.totalRegistros;
  }

}
