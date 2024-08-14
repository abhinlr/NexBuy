import { Component,OnInit } from '@angular/core';
import {ProductCardComponent} from "../product-card/product-card.component";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.scss'
})
export class LatestComponent implements OnInit{

  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    // this.productService.getProducts().subscribe({
    //   next: (data) => {
    //     console.log(data)
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   }
    // })
  }
}
