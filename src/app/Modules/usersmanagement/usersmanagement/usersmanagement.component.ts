import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from 'src/app/services/userservice/user.service';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



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
    role: 'Collaborateur', // Default role
  };
  submitted = false;


  formModal: BsModalRef;
  form = {
    keyboard: true,
    class: "modal-dialog-centered modal-sm"
  };

  addUserForm: FormGroup;


 

  constructor(private userService: UserService,private http: HttpClient, private formBuilder: FormBuilder,
    private modalService: BsModalService) {
      this.addUserForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.email],
        phoneNumber: [''],
        username: [''],
        password: [''],
        role: ['Collaborateur'], // You can set a default value here
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
