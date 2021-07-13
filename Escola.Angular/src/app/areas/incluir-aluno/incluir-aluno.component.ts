import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { dtoAluno } from 'src/app/model/aluno-model';
import { dtoEscola } from 'src/app/model/escola-model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-incluir-aluno',
  templateUrl: './incluir-aluno.component.html',
  styleUrls: ['./incluir-aluno.component.css']
})
export class IncluirAlunoComponent implements OnInit {

  model = new dtoAluno();  
  listaEscolas: [dtoEscola];

  constructor(private _appService: AppService, private _router: Router) { }

  ngOnInit() {
    this.carregarEscola();
  }


  gravarAluno(){
    if(this.validaAluno()){
      this._appService.postItems('/Aluno/GravarAluno/', this.model).pipe(
        finalize(() => {
  
        })).subscribe((data: any) => {
          alert("Aluno inserido com sucesso.");
          this._router.navigate(['aluno']);
        }, error => {
          alert(error.error);
  
        });
    }
  }

  validaAluno(){
    if(this.model.nomeAluno.length == 0){
      alert("Nome do Aluno é Obrigatório.")
      return false;
    }

    if(this.model.cpf.length == 0){
      alert("Cpf do Aluno é Obrigatório.")
      return false;
    }

    if(this.model.codEscola == 0){
      alert("A esscola do Aluno é Obrigatória.")
      return false;
    }
    return true;
  }

  carregarEscola() {
    this._appService.getItems("/Escola/CarregarEscola/").pipe(
      finalize(() => {

      })).subscribe((data: any) => {
        this.listaEscolas = data;
        this.model.codEscola = 0;
      }, error => {
        alert(error.error);

      });
  }

}
