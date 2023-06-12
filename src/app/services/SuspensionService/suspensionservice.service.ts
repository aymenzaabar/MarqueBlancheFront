import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuspensionserviceService {

  constructor(private http: HttpClient) { }
  rebootBoxForSuspend() {
    const username = 'admin';
    const password = 'admin';
    const encodedCredentials = btoa(username + ':' + password);
  
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + encodedCredentials,
      'Content-Type': 'application/json' // Set the appropriate content type for your request
    });
  
    const url = 'http://localhost:8090/mb-commande/commande/suspend/reboot/batch';
  
    const body = {
      // Your request body data
    };
  
    this.http.post(url, body, { headers }).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
}

}
