import { Component } from '@angular/core';
import { faPhone,faMagnifyingGlass, faCartShopping, faCamera } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faWhatsapp = faWhatsapp;
  faPhone = faPhone;
  faUser = faUser;
  faCartShopping = faCartShopping;
  faMagnifyingGlass = faMagnifyingGlass;
  faCamera = faCamera
}
