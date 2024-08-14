import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SpinnerComponent} from "./common/spinner/spinner.component";
import {SiteService} from "./services/site.service";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(private siteService:SiteService, private authService:AuthService) {
  }
  title = 'NexBuy';
  isLoading = false;
  userObject:any = null;

  ngOnInit() {
    this.siteService.loading.subscribe((value: boolean) => {
      this.isLoading = value;
    });

    this.authService.userObject$.subscribe((value: any) => {
      if (value) {
        this.userObject = value;
      }
    })
  }
}
