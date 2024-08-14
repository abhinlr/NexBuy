import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonName: string = 'Button';
  @Input() type: string = 'button';
  @Input() length: string = 'auto';
  @Input() disabled: boolean = false;
  @Input() color: string = 'primary';

}
