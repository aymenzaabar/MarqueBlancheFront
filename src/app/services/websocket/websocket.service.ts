import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket: any;

  constructor() { }
  public connect(): void {
    this.socket = io.io('http://localhost:8090/logs');
  }

  public getLogs(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('log', (data: any) => observer.next(data));
    });
  }
}
