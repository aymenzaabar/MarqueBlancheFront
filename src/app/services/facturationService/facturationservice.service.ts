import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturationserviceService {

  constructor(private http: HttpClient) { }


  exportFacturation(date:string): Observable<any> {
     
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic YWRtaW46YWRtaW4='
      })
    };
    const url = 'http://localhost:8090/mb-commande/commande/facturation/batch';
   return this.http.post(url,date,httpOptions);
  }
}
