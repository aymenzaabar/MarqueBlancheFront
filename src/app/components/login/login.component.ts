import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { TokenService } from 'src/app/services/tokenservice/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() errorMessage!: string;
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
 // errorMessagee = 'merci de verifier votre compte';
 // errorMessage = 'Nom dutilisateur ou mot de passe incorrect';

  roles: string[] = [];
  user:User=new User();

  constructor(private authService: AuthService, private token: TokenService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.token.getToken()) {
      this.isLoggedIn = true;
      this.toastr.warning('Vous étes déja connecté', 'Success', {
        timeOut: 3000,
        closeButton: true,
        progressBar: true,
        positionClass: 'toast-top-right' 
      });
      const role = sessionStorage.getItem("role");
      if (role === 'ROLE_ADMIN') {
        this.router.navigate(['/facturation']);
      } else if (role === 'ROLE_MANAGER') {
        this.router.navigate(['/suspension']);
      } else if (role === 'ROLE_EMPLOYEE') {
        this.router.navigate(['/profile']);
      }

      //this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void { 
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        //this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        //this.token.setToken(data.accessToken);
        sessionStorage.setItem("username",data.username);
        sessionStorage.setItem("refreshToken",data.refreshToken);
        sessionStorage.setItem("id",data.id);
        sessionStorage.setItem("roles",data.roles[0]);
        sessionStorage.setItem("email",data.email);
        sessionStorage.setItem("accessToken",data.accessToken);
        //this.roles = this.storageService.getUser().roles;
      
        const role = data.roles[0];
        if (role === 'ROLE_ADMIN') {
          this.router.navigate(['/facturation']);
        } else if (role === 'ROLE_MANAGER') {
          this.router.navigate(['/suspension']);
        } else if (role === 'ROLE_EMPLOYEE') {
          this.router.navigate(['/profile']);
        }
        //this.reloadPage();
      },
      error: err => {
        this.isLoginFailed = true;
  
        if (err.status === 401) {
 this.toastr.error('username ou mot de passe incorrecte ', 'Attention !!', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
          positionClass: 'toast-top-right' 
        });
        } else if (err.status === 403) {
          this.toastr.error('votre compte a été sanctionné par l utilisateur', 'Attention !!', {
            timeOut: 3000,
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-top-right' 
          });        } else {
          this.toastr.error('Veuillez vous Verifier votre email', 'Attention !!', {
            timeOut: 3000,
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-top-right' 
          });        }
  
          }
    });
  }
  
  reloadPage(): void {
    window.location.reload();
  }

}
