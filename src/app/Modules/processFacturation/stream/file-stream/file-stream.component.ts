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
  fileLines: string[] = [];
  displayedLines: string[] = [];

  ngOnInit() {
    this.webSocketService.getStreamedFile().subscribe(lines => {
    
      this.fileLines = lines.split('                  ');
      console.log(this.fileLines)
    //  this.displayLinesWithDelay();
    });
   
    
  }
  x : any = false
  displayLinesWithDelay() {
    this. x =true
    this.fileLines.forEach((line, index) => {
      setTimeout(() => {
        this.displayedLines.push(line);
      }, 600 * index); // Adjust the delay (in milliseconds) as needed
    });
  }
}
