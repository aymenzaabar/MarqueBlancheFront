import { DatePipe, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 username:any;
 id:any;
 user:any;
  imageUrl: any;
  private photoUrl= 'http://localhost:8020/api/image/upload';

  constructor(private userservice:UserService, private http:HttpClient )  { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username') || "User";
    const userId = sessionStorage.getItem('id');
    this.user = this.userservice.getUserById(this.id);
    this.imageUrl = this.userservice.getImageById(userId);
    this.id = this.userservice.getImageById(userId);
    console.log(this.id);


    this.userservice.getUserById(userId).subscribe(
      (data: any) => {
        this.user = data;
        this.imageUrl = data.image?.imagenUrl;
      },
      (error: any) => {
        console.log('Error fetching user data:', error);
      }
    );

    

    
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const userId = sessionStorage.getItem('id'); // Provide the actual user ID
      this.userservice.uploadImage(file, userId).subscribe(
        (response: any) => {
          // Handle successful upload
          console.log('Upload success:', response);
          window.location.reload();
        },
        (error: any) => {
          // Handle upload error
          console.error('Upload error:', error);
        }
      );
    }
  }

  onDeleteImage(id): void {
    this.userservice.deleteImage(id).subscribe(
      (response:any) => {
        console.log('Image deleted successfully');
        // Perform any additional actions after successful deletion
      },
      (error) => {
        console.error('Error deleting image:', error);
        // Handle error if deletion fails
      }
    );
  }
  }




