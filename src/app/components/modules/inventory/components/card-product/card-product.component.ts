import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../../globalComponents/button/button.component';

interface Product {
  title: string;
  variants: number;
  category: string;
  retail_price: number;
  wholesale_price: number;
  stock: number;
}

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss',
})
export class CardProductComponent {
  @Input() product!: Product;
}
