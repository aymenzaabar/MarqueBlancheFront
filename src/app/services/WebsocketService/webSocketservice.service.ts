import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketServiceService {

  private socket$: WebSocketSubject<string>;

  constructor(private http: HttpClient) {
    this.socket$ = webSocket('ws://localhost:8020/api/file-socket'); // Replace with your server's URL
  }
  private apiUrl = 'http://localhost:8020/api/user'
  getSocket() {
    console.log(this.socket$)
    return this.socket$;
  }

  getStreamedFile() {
    return this.http.get<any>(`${this.apiUrl}/stream-file`, { responseType: 'text' as 'json' });
  }
}
