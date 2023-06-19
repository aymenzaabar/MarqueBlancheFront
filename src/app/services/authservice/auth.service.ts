import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';


const AUTH_API = 'http://localhost:8020/api/auth/';
interface LoginRequest {
  username: string;
  password: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'  }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser!: Observable<User>;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }


  register(name: string , phone : number, username: string, email: string, password: string,roles:any): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        name,
        phone,
        username,
        email,
        password,
        roles
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }

  getAccessToken(): string | null {
    return sessionStorage.getItem('accessToken');
  }
  getRole(): string | null {
    return sessionStorage.getItem('roles');
  }
}
