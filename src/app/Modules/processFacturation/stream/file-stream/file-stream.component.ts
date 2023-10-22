import { Component, OnInit } from '@angular/core';
import { WebSocketServiceService } from 'src/app/services/WebsocketService/webSocketservice.service';

@Component({
  selector: 'app-file-stream',
  templateUrl: './file-stream.component.html',
  styleUrls: ['./file-stream.component.scss']
})
export class FileStreamComponent implements OnInit {
  text: string[] = [];

  constructor(private webSocketService: WebSocketServiceService) { }

  messages: string[] = [];


  ngOnInit() {
    this.webSocketService.getSocket().subscribe(
      (message: string) => {
        this.messages.push(message);
      },
      (error: any) => {
        console.error('Erreur de connexion WebSocket : ', error);
      }
    );
  }
}
