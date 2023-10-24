import {Component, OnInit, ElementRef} from "@angular/core";
import {ROUTES} from "../sidebar/sidebar.component";
import {Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

import {
    Location,
    LocationStrategy,
    PathLocationStrategy
} from "@angular/common";
import { UserService } from "src/app/services/userservice/user.service";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
    public listTitles: any[];
    public location: Location;
    sidenavOpen: boolean = true;
    imageUrl: any;
    user:any;
    idImage : any;
    userId:any

    constructor(
        location: Location,
        private element: ElementRef,
        private router: Router,
        private userservice: UserService
    ) {
        this.location = location;
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                // Show loading indicator

            }
            if (event instanceof NavigationEnd) {
                // Hide loading indicator

                if (window.innerWidth < 1200) {
                    document.body.classList.remove("g-sidenav-pinned");
                    document.body.classList.add("g-sidenav-hidden");
                    this.sidenavOpen = false;
                }
            }

            if (event instanceof NavigationError) {
                // Hide loading indicator

                // Present error to user
                console.log(event.error);
            }
        });

    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        const userId = sessionStorage.getItem('id');
        this.imageUrl = this.userservice.getImageById(userId);
        this.getuser(this.userId);
        this. userId = sessionStorage.getItem('id');

       this.user=this.getuser(userId);


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

    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
        }

        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return "Dashboard";
    }



    openSidebar() {
        if (document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-pinned");
            document.body.classList.add("g-sidenav-hidden");
            this.sidenavOpen = false;
        } else {
            document.body.classList.add("g-sidenav-pinned");
            document.body.classList.remove("g-sidenav-hidden");
            this.sidenavOpen = true;
        }
    }

    toggleSidenav() {
        if (document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-pinned");
            document.body.classList.add("g-sidenav-hidden");
            this.sidenavOpen = false;
        } else {
            document.body.classList.add("g-sidenav-pinned");
            document.body.classList.remove("g-sidenav-hidden");
            this.sidenavOpen = true;
        }
    }

    logout()
  {  this.router.navigate(['/login']);
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("roles");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("email");
  
  }
}
