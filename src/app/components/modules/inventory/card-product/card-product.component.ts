import { Component } from '@angular/core';
import { ButtonComponent } from '../../../globalComponents/button/button.component';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {

}
