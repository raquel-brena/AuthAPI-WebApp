import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input()
  name!: string;
  @Input()
  price!: number;
  @Input()
  description: string | undefined;
  @Input()
  sku!: string;
  @Input() quantity!: number;
  @Input() category!: string;
  @Input() isAddSelected!: boolean;
  @Output() isAddSelectedChange = new EventEmitter<boolean>();
  @Output() productSelected = new EventEmitter<Product>();

  select = (
    sku: string,
    name: string,
    description: string | undefined,
    quantity: number,
    price: number,
    category: string
  ) => {
    const product: Product = {
      sku,
      name,
      description: description || '',
      quantity,
      price,
      category,
    };

    this.isAddSelected = !this.isAddSelected;
    this.isAddSelectedChange.emit(this.isAddSelected);
    this.productSelected.emit(product);
  };
}
