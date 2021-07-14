import { Injectable, EventEmitter, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getUrlScheme } from '@angular/compiler';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'

  }),
};

@Injectable()
export class AppService {

  eventosMenu = new EventEmitter();
  eventosCertificado = new EventEmitter();
  constructor(private http: HttpClient, private location: Location, public _router: Router, private injector: Injector) {
    
   }
   
   apiUrl = environment.apiUrl;

  getItems(caminho) {
    return this.http.get(this.apiUrl + `${caminho}`);
  }


  postItems(caminho, objeto): Observable<any> {
    return this.http.post(this.apiUrl + `${caminho}`, objeto, httpOptions);
  }

  putItems(caminho, objeto): Observable<any> {
    return this.http.put(this.apiUrl + `${caminho}`, objeto, httpOptions);
  }

  deleteItems(caminho) {
    return this.http.delete(this.apiUrl + `${caminho}`);
  }

  postItemsForm(caminho, objeto): Observable<any> {
    let token = localStorage.getItem(btoa('auth_token'));
    return this.http.post(this.apiUrl + `${caminho}`, objeto, {headers: new HttpHeaders({
      'Authorization': "teste" //token
    })});
  }

  getItemsReturnBlob(caminho) {
    return this.http.get(this.apiUrl + `${caminho}`, { responseType: 'blob' })
      .pipe(map(res => { return res }));
  }

  voltar(){
    return this.location.back();
  }

  downloadFile(caminho: string, nomeArquivo: string): void {

    const baseUrl = this.apiUrl + caminho;

    const headers = new HttpHeaders().set('Authorization', 'my-auth-token');
    this.http.get(baseUrl, { headers, responseType: 'blob' as 'json' }).subscribe(
      (response: any) => {
        let dataType = response.type;
        let binaryData = [];
        binaryData.push(response);
        let downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
        downloadLink.download = nomeArquivo;
        document.body.appendChild(downloadLink);
        downloadLink.click();
      }
    )
  }

}  
