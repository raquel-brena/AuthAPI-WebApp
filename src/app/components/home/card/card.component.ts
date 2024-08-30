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
  retail_price!: number;
  @Input()
  description: string | undefined;
  @Input()
  sku!: string;
  @Input() category!: string;
  @Input() isAddSelected!: boolean;
  @Output() isAddSelectedChange = new EventEmitter<boolean>();
  @Output() productSelected = new EventEmitter<Product>();

  select = (
    sku: string,
    name: string,
    description: string | undefined,
    retail_price: number,
    category: string
  ) => {
    const product: Product = {
      sku,
      name,
      description: description || '',
      retail_price,
      category,
      variants: 0,
      gender: 'male',
      wholesale_price: 0,
      status: 'active',
      barcode: '',
      unit: 'each',
      stock: {
        on_hand: 0,
        to_be_receveid: 0,
        to_be_packed: 0
      },
      history: [],
      notes: []
    };

    this.isAddSelected = !this.isAddSelected;
    this.isAddSelectedChange.emit(this.isAddSelected);
    this.productSelected.emit(product);
  };
}
