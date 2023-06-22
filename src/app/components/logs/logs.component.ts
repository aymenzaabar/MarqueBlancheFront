import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket/websocket.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  logs: string[] = [];

  constructor(private websocketService: WebsocketService) { }

  ngOnInit() {
    this.websocketService.connect();
    this.websocketService.getLogs().subscribe((log: string) => {
      this.logs.push(log);
    });
  }
}