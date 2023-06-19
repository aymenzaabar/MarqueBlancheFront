import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'auth-token';

  constructor() { }

  public setToken(token: string): void {
    sessionStorage.setItem(this.tokenKey, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  public removeToken(): void {
    sessionStorage.removeItem(this.tokenKey);
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }
  public getUser(){
    const token = this.getToken();
    if(token){
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    }
    return null;
  }
  public signOut(){
    this.removeToken();
  }
}
