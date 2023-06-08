import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

var misc: any = {
  sidebar_mini_active: true
};

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/facturation",
    title: "Facturation",
    type: "link",
    icontype: "ni-money-coins text-primary",
    isCollapsed: true,
  },
  {
    path: "/suspension",
    title: "Suspension",
    type: "link",
    icontype: "ni-button-pause text-orange",
    collapse: "examples",
    isCollapsed: true,

  },
  {
    path: "/reactivation",
    title: "Réactivation",
    type: "link",
    icontype: "ni-button-power text-info",
    collapse: "components",
    isCollapsed: true,
  },
  {
    path: "/credentialssip",
    title: "Credentials SIP",
    type: "link",
    icontype: "ni-key-25 text-pink",
    collapse: "forms",
    isCollapsed: true,
  },
  {
    path: "/ajoutpnom",
    title: "Ajout P-nom",
    type: "link",
    icontype: "ni-badge text-default",
    collapse: "tables",
    isCollapsed: true,

  },
  {
    path: "/supressionpnom",
    title: "Supression P-nom",
    type: "link",
    icontype: "ni-basket text-primary",
    collapse: "maps",
    isCollapsed: true,

  },
  {
    path: "/creationinternet",
    title: "Création Internet",
    type: "link",
    icontype: "ni-planet text-green"
  },
  {
    path: "/resilationinternet",
    title: "Résilation Internet",
    type: "link",
    icontype: "ni-paper-diploma text-info"
  },
  {
    path: "/echange",
    title: "Echange",
    type: "link",
    icontype: "ni-curved-next text-red"
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe(event => {
      this.isCollapsed = true;
    });
  }
  onMouseEnterSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }
  onMouseLeaveSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }
  minimizeSidebar() {
    const sidenavToggler = document.getElementsByClassName(
      "sidenav-toggler"
    )[0];
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("g-sidenav-pinned")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("g-sidenav-pinned");
      body.classList.add("g-sidenav-hidden");
      sidenavToggler.classList.remove("active");
      misc.sidebar_mini_active = false;
    } else {
      body.classList.add("g-sidenav-pinned");
      body.classList.remove("g-sidenav-hidden");
      sidenavToggler.classList.add("active");
      misc.sidebar_mini_active = true;
    }
  }
}
