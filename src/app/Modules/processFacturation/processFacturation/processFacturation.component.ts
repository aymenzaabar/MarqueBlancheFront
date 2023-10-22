import { Component, OnInit } from '@angular/core';
import { WebSocketServiceService } from 'src/app/services/WebsocketService/webSocketservice.service';
import { FacturationserviceService } from 'src/app/services/facturationService/facturationservice.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-processFacturation',
  templateUrl: './processFacturation.component.html',
  styleUrls: ['./processFacturation.component.scss']
})
export class ProcessFacturationComponent implements OnInit {
  currentStep : number = 0;
  date:string;

  constructor( private facturationevrice: FacturationserviceService) { }
  logs: string[] = [];

  ngOnInit(): void {
  
  }
  
  steps = ['Étape 1', 'Étape 2', 'Étape 3'];
  

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  submit() {
    // Logique de soumission des données du formulaire
    console.log('Formulaire soumis !');
  }

  

  successSwal() {
    swal.fire({
      title: "Success",
      text: "",
      icon: "success",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-success"
      }
    });
  }
  warningSwal() {
    swal.fire({
      title: "Processus échoué",
      text: "",
      icon: "warning",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-warning"
      }
    });
  }


  exportFacture() {
    this.facturationevrice.exportFacturation(this.date).subscribe(
      (response) => {
        console.log(response);
        this.successSwal(); // Call the successSwal() function
      },
      (error) => {
        console.error(error);
        this.warningSwal();
      }
    );
  }


}
