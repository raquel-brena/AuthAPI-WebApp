import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
@Component({
  selector: 'app-container-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './container-card.component.html',
  styleUrl: './container-card.component.scss',
})
export class ContainerCardComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: Product[] = [];
  isAddSelected: boolean = false;

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
}
