import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ButtonComponent} from "../../common/button/button.component";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

}
