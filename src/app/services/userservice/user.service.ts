import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8020/api/user/getUserById';
  private imgUrl= 'http://localhost:8020/api/image/imageByUser';
  private baseUrl = 'http://localhost:8020/api/image';
  private allUsersUrl = 'http://localhost:8020/api/user/allUsers';


  constructor(private http: HttpClient) { }

  getUserById(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }
  getImageById(userId: string): Observable<any> {
    const url = `${this.imgUrl}/${userId}`;
    return this.http.get(url);
  }
  uploadImage(file: File, userId: string): Observable<any> {
    const url = `http://localhost:8020/api/image/upload?idUser=${userId}`;
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(url, formData);
  }
  deleteImage(id: string): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.allUsersUrl);
  }
}
