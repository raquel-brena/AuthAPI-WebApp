import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { AddProductComponent } from '../../form/add-product/add-product.component';
@Component({
  selector: 'app-container-card',
  standalone: true,
  imports: [CardComponent, AddProductComponent],
  templateUrl: './container-card.component.html',
  styleUrl: './container-card.component.scss',
})
export class ContainerCardComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: Product[] = [];

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
