import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processFacturation',
  templateUrl: './processFacturation.component.html',
  styleUrls: ['./processFacturation.component.scss']
})
export class ProcessFacturationComponent implements OnInit {
  currentStep : number = 0;
  constructor() { }

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

}
