import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  

  ngOnInit(): void {
  }
  username: string;
  password: string;

  constructor(private router: Router) {}

  onSubmit() {
    // Static login validation
    if (this.username === 'admin' && this.password === 'admin') {
      console.log('Login successful!');
      this.router.navigate(['/facturation']); // Redirect to the dashboard route
    } else {
      console.log('Invalid credentials!');
    }
  }

}
