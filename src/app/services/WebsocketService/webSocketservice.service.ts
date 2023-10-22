import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketServiceService {

  private socket$: WebSocketSubject<string>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:8020/api/file-socket'); // Replace with your server's URL
  }

  getSocket() {
    console.log(this.socket$)
    return this.socket$;
  }
}
