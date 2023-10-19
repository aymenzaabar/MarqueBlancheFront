import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from 'src/app/services/userservice/user.service';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';



@Component({
  selector: 'app-usersmanagement',
  templateUrl: './usersmanagement.component.html',
  styleUrls: ['./usersmanagement.component.scss']
})
export class UsersmanagementComponent implements OnInit {
  users: any[] = [];
  dismissible = true;
 
  user = {
    name: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    roles:  []as string[],
    // Default role
  };
  submitted = false;


  formModal: BsModalRef;
  form = {
    keyboard: true,
    class: "modal-dialog-centered modal-sm"
  };

  addUserForm: FormGroup;

  notificationModal: BsModalRef;
  notification = {
    keyboard: true,
    class: "modal-dialog-centered modal-danger"
  };

  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };
 

  constructor(private userService: UserService,private http: HttpClient, private formBuilder: FormBuilder,
    private modalService: BsModalService) {


      
      this.addUserForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['',[Validators.required, Validators.email]],
        phoneNumber: ['',[Validators.required, Validators.minLength(8)]],
        username: ['', [Validators.required, noWhitespaceValidator()]],
        password: ['',[Validators.required, Validators.minLength(8)]],
        roles: [[] as string[]], // Initialize with 'default'
      });
     }



    openFormModal(modalForm: TemplateRef<any>) {
      this.formModal = this.modalService.show(modalForm, this.form);
    }
    registerUser() {
      // Send a POST request to the API endpoint
      this.http
        .post('http://localhost:8020/api/auth/signup', this.user)
        .subscribe(
          (response) => {
            console.log('User registered successfully', response);
            // Handle success (e.g., redirect to a success page)
          },
          (error) => {
            console.error('Error registering user', error);
            // Handle errors (e.g., display an error message)
          }
        );
    }
    openDefaultModal(modalDefault: TemplateRef<any>) {
      this.defaultModal = this.modalService.show(
        modalDefault,
         this.default
         );
    }

    openNotificationModal(modalNotification: TemplateRef<any>) {
      this.notificationModal = this.modalService.show(
        modalNotification,
        this.notification
      );
    }
    

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      response => {
        this.users = response;
      },
      error => {
        console.error(error);
      }
    );

    
  }
  onDeleteUser(userId: number) {
  
      // Appeler l'API de suppression de l'utilisateur par ID
      this.http.delete(`http://localhost:8020/api/user/deleteUser/${userId}`)
        .subscribe(
          () => {
            // Suppression réussie, effectuez ici des actions supplémentaires si nécessaires
            console.log('Utilisateur supprimé avec succès.');
          },
          (error) => {
            // Gérez les erreurs ici
            console.error('Erreur lors de la suppression de l\'utilisateur :', error);
          }
        );
    
  }

    
    archiveUser(userId: number) {
      this.http.put(`http://localhost:8020/api/user/archiveUser/${userId}`, {})
      .subscribe(
        () => {
          console.log('Utilisateur archirvé avec succès.');
        },
        (error) => {
          
          console.error('Erreur lors de l\'archivage de l\'utilisateur :', error);
        }
      );
    }


  
  get f() { return this.addUserForm.controls; }
  onAdd() {
    this.submitted = true;
  
    const user = this.addUserForm.value;
    const apiUrl = `http://localhost:8020/api/auth/signup`; 
  
    if (this.addUserForm.invalid) {
      return;
    }
  
    this.http.post(apiUrl, user).subscribe(
      (response) => {
        // Handle success response
        this.userService.getAllUsers;
        console.log('API call successful', response);
        // Handle success response here
      },
      (error) => {
        // Handle error response
        console.error('API call error', error);
        // Handle error response here
      }
    );
  }
  

}
function noWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value && control.value.trim().length !== control.value.length) {
      return { 'whitespace': true };
    }
    return null;
  };
}



