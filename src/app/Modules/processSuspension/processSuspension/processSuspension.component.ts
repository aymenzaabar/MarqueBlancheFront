import { Component, OnInit } from '@angular/core';
import { SuspensionserviceService } from 'src/app/services/SuspensionService/suspensionservice.service';

@Component({
  selector: 'app-process-suspension',
  templateUrl: './processSuspension.component.html',
  styleUrls: ['./processSuspension.component.scss']
})
export class ProcessSuspensionComponent implements OnInit {
  currentStep : number = 0;
  constructor(private suspensionService: SuspensionserviceService) { }

  ngOnInit(): void {
    console.log("aaaaaaaaaaaaaaaa")
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

  
  postData: any = {}; // Data to be posted

rebootBox() {
  this.suspensionService.rebootBoxForSuspend();
}





}
