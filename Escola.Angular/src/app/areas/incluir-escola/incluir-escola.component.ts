import { Router } from '@angular/router';
import { dtoEscola } from './../../model/escola-model';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-incluir-escola',
  templateUrl: './incluir-escola.component.html',
  styleUrls: ['./incluir-escola.component.css']
})
export class IncluirEscolaComponent implements OnInit {

  model = new dtoEscola();  

  constructor(private _appService: AppService, private _router: Router) { }

  ngOnInit() {
  }


  gravarEscola(){
    if(this.validaEscola()){
      this._appService.postItems('/Escola/GravarEscola/', this.model).pipe(
        finalize(() => {
  
        })).subscribe((data: any) => {
          alert("Escola inserida com sucesso.");
          this._router.navigate(['escola']);
        }, error => {
  
        });
    }
  }

  validaEscola(){
    if(this.model.nomeEscola.length == 0){
      alert("Nome da Escola é Obrigatório.")
      return false;
    }

    if(this.model.cnpj.length == 0){
      alert("Cnpj da Escola é Obrigatório.")
      return false;
    }
    return true;
  }



}
