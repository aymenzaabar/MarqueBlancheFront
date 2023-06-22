import { DatePipe, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  idImage : any;
  userId:any
  private photoUrl= 'http://localhost:8020/api/image/upload';
  updateUserForm: FormGroup;
  

  constructor(private userservice:UserService, private http:HttpClient )  {

    this.updateUserForm = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      //username: new FormControl(),
      email: new FormControl(),
     // password: new FormControl(),
      phoneNumber: new FormControl()
    });
   }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username') || "User";
    this. userId = sessionStorage.getItem('id');
    this.user = this.userservice.getUserById(this.id);
    this.imageUrl = this.userservice.getImageById(this.userId);
    this.id = this.userservice.getImageById(this.userId);
    console.log(this.id);



    this.getuser(this.userId)

    
  }

  
getuser(id:any){
  
  this.userservice.getUserById(id).subscribe(
    (data: any) => {
      this.user = data;
      this.imageUrl = data.image?.imagenUrl;
      this.idImage = data.image.id;
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
         // window.location.reload();
         this.getuser(this.userId)
        //  this.toastr.show(
        //   '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Succés</span> <span data-notify="message">votre Photo est ajoutée avec succés</span></div>',
        //   '',
        //   {
        //     timeOut: 3000,
        //     closeButton: true,
        //     enableHtml: true,
        //     tapToDismiss: false,
        //     titleClass: 'alert-title',
        //     positionClass: 'toast-top-center',
        //     toastClass: "ngx-toastr alert alert-dismissible alert-success alert-notify",
        //   }
        // );

        },
        (error: any) => {
          // Handle upload error
          console.error('Upload error:', error);
          // this.toastr.show(
          //   '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Erreur</span> <span data-notify="message">Echec ajout photo</span></div>',
          //   "",
          //   {
          //     timeOut: 3000,
          //     closeButton: true,
          //     enableHtml: true,
          //     tapToDismiss: false,
          //     titleClass: "alert-title",
          //     positionClass: "toast-top-center",
          //     toastClass:
          //       "ngx-toastr alert alert-dismissible alert-danger alert-notify"
          //   }
          // );
        }
      );
    }
  }

  onDeleteImage(id): void {
    this.userservice.deleteImage(this.idImage).subscribe(
      (response:any) => {
        console.log('success',Response);
        // Perform any additional actions after successful deletion
        this.getuser(this.userId)
        // this.toastr.show(
        //   '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Succés</span> <span data-notify="message">votre Photo est supprimée avec succés</span></div>',
        //   '',
        //   {
        //     timeOut: 3000,
        //     closeButton: true,
        //     enableHtml: true,
        //     tapToDismiss: false,
        //     titleClass: 'alert-title',
        //     positionClass: 'toast-top-center',
        //     toastClass: "ngx-toastr alert alert-dismissible alert-success alert-notify",
        //   }
        // );

      },
      (error:any) => {
        console.error('Error deleting image:', error);
        // this.toastr.show(
        //   '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Erreur</span> <span data-notify="message">Echec de suppression photo</span></div>',
        //   "",
        //   {
        //     timeOut: 3000,
        //     closeButton: true,
        //     enableHtml: true,
        //     tapToDismiss: false,
        //     titleClass: "alert-title",
        //     positionClass: "toast-top-center",
        //     toastClass:
        //       "ngx-toastr alert alert-dismissible alert-danger alert-notify"
        //   }
        // );
        // Handle error if deletion fails
      }
    );
  }

  onUpdate() {
    const user = this.updateUserForm.value;
    const idUser = sessionStorage.getItem('id');
    const apiUrl = `http://localhost:8020/api/user/updateUser/${idUser}`;

    this.http.put(apiUrl, user).subscribe(
      response => {
        // Handle success response
        this.getuser(this.userId);
        console.log('API call successful', response);
        // this.toastr.show(
        //   '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Succés</span> <span data-notify="message">vos informations est modifiées avec succés</span></div>',
        //   '',
        //   {
        //     timeOut: 3000,
        //     closeButton: true,
        //     enableHtml: true,
        //     tapToDismiss: false,
        //     titleClass: 'alert-title',
        //     positionClass: 'toast-top-center',
        //     toastClass: "ngx-toastr alert alert-dismissible alert-success alert-notify",
        //   }
        // );
      },
      error => {
        // Handle error response
        console.error('API call error', error);
        // this.toastr.show(
        //   '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Erreur</span> <span data-notify="message">Echec de mise à jour </span></div>',
        //   "",
        //   {
        //     timeOut: 3000,
        //     closeButton: true,
        //     enableHtml: true,
        //     tapToDismiss: false,
        //     titleClass: "alert-title",
        //     positionClass: "toast-top-center",
        //     toastClass:
        //       "ngx-toastr alert alert-dismissible alert-danger alert-notify"
        //   }
        // );
      }
    );
  }
  }




