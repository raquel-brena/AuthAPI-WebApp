import { Component, Input, OnInit } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './Card/components/card/card.component';
import { AddProductComponent } from '../../form/add-product/add-product.component';
import { ButtonComponent } from '../../globalComponents/button/button.component';
import { BoxComponent } from '../../globalComponents/box/box.component';

import { TotalCardComponent } from './Card/components/total-card/total-card.component';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { CardProductComponent } from '../../globalComponents/card-product/card-product.component';

@Component({
  selector: 'app-container-card',
  standalone: true,
  imports: [
    CardComponent,
    AddProductComponent,
    ButtonComponent,
    BoxComponent,
    CardProductComponent,
    TotalCardComponent,
    MatIconModule,
  ],
  templateUrl: './container-card.component.html',
  styleUrl: './container-card.component.scss',
})
export class ContainerCardComponent implements OnInit {
  constructor(private productService: ProductService) {}

  @Input() selectedItem: string = '';

  products: Product[] = [];
  totalCardList = [
    {
      icon: 'wallet',
      percentage: 2,
      title: 'TOTAL PRODUCT IN INVETORY',
      total: '10,226',
    },
    {
      icon: 'domain',
      percentage: 2,
      title: 'TOTAL QUANTITY ON HAND',
      total: '2,000,508',
    },
    {
      icon: 'insert_chart',
      percentage: 2,
      title: 'TOTAL PRODUCT TO BE RECEIVED',
      total: '5,680',
    },
    {
      icon: 'area_chartallet',
      percentage: 2,
      title: 'TOTAL BE PACKED',
      total: '878',
    },
  ];

  productSelected: Product = {
    name: '',
    description: '',
    sku: '',
    category: '',
    variants: 0,
    gender: 'male',
    retail_price: 0,
    wholesale_price: 0,
    status: 'active',
    barcode: '',
    unit: 'each',
    stock: {
      on_hand: 0,
      to_be_receveid: 0,
      to_be_packed: 0,
    },
    history: [],
    notes: [],
  };

  isAddSelected: boolean = false;

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  updateProducts(products: Product[]) {
    this.products = products;
    console.log('Evento products emitido com: ', this.products);
  }
}
