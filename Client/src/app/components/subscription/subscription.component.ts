import { Component } from '@angular/core';
import {ButtonComponent} from "../../common/button/button.component";

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})
export class SubscriptionComponent {

}
