import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {SiteService} from "../../services/site.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private siteService:SiteService, private authService:AuthService) {
  }
  isLoggedIn: boolean = false;
  userObject: any = null;

  ngOnInit() {
    this.authService.userObject$.subscribe(userObject => {
      this.userObject = userObject;
    })
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    })
  }

}
