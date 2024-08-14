import {Component, OnInit} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {PrimeTemplate} from "primeng/api";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [
    CarouselModule,
    PrimeTemplate,
    NgOptimizedImage
  ],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent implements OnInit{

  categories :{name:string, image:string}[] = [{name:"Laptops", image:"laptop.png"}, {name:"Mobiles", image:"mobile.png"}, {name:"Headphones", image:"headphone.png"}, {name:"Watches", image:"watch.png"}
    , {name:"Tablets", image:"tablet.png"}, {name:"Cameras", image:"camera.png"}, {name:"Speakers", image:"speaker.png"}, {name:"Printers", image:"printer.png"}];

  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1350px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '1150px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '900px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '650px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }


}
