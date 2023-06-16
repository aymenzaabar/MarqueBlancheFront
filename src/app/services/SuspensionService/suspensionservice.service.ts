import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuspensionserviceService {

  constructor(private http: HttpClient) { }
  rebootBoxForSuspend(): Observable<any> {
    
   /* const headers = new HttpHeaders({
      'Authorization': 'Basic ' + credentials,
       'Access-Control-Allow-Origin':'*'
    });*/
    const auth = {
      username : "admin",
      password :"admin"
    }
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic YWRtaW46YWRtaW4='
      })
    };
    console.log(httpOptions.headers.get('authorization'))
    const url = 'http://localhost:8090/mb-commande/commande/suspend/reboot/batch';
   return this.http.post(url,null,httpOptions);
}

treatCrForSuspend(): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Basic YWRtaW46YWRtaW4='
    })
  };
  const url = 'http://localhost:8090/mb-commande/CRManagement/bicool/batch';
 return this.http.post(url,null,httpOptions);
}

}
