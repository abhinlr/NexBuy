import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {NgOptimizedImage} from "@angular/common";
import { CarouselModule } from 'primeng/carousel';
import {BannerComponent} from "../banner/banner.component";
import {ExploreComponent} from "../explore/explore.component";
import {FeaturesComponent} from "../features/features.component";
import {LatestComponent} from "../latest/latest.component";
import {SubscriptionComponent} from "../subscription/subscription.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CommonModule,
    CarouselModule,
    BannerComponent,
    ExploreComponent,
    FeaturesComponent,
    LatestComponent,
    SubscriptionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  ngOnInit() {

  }
}
