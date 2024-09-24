import { Component } from '@angular/core';
import { ButtonComponent } from '../../globalComponents/button/button.component';
import { MenuFilterComponent } from './components/menu-filter/menu-filter.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { SearchComponent } from './components/search/search.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';

interface CardProduct {
  active: boolean;
  title: string;
  variants: number;
  category: string;
  retail_price: number;
  wholesale_price: number;
  sku: string;
  stock: {
    onHand: number;
    toBeReceived: number;
    toBePacked: number;
  };
}

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    MenuFilterComponent,
    CardProductComponent,
    SearchComponent,
    ButtonComponent,
    DialogModule,
    DialogComponent,
    FormsModule,
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent {
  cardSelecionado!: CardProduct | null;
  visible = false;
  searchProduct = '';

  openProductDetails(card: any) {
    this.cardSelecionado = card;
    this.visible = true;
  }

  cardProductList = [
    {
      active: true,
      title: 'Adidas Orketro Shoes Blue 36',
      variants: 6,
      category: 'Man shoes',
      retail_price: 180,
      wholesale_price: 100,
      sku: 'ADDS-GRN-22',
      stock: {
        onHand: 2,
        toBeReceived: 3,
        toBePacked: 1,
      },
    },
    {
      active: true,
      title: 'Nike Air Max 270 Black 42',
      variants: 4,
      category: 'Man shoes',
      retail_price: 200,
      wholesale_price: 120,
      sku: 'NIK-BLK-42',
      stock: {
        onHand: 5,
        toBeReceived: 2,
        toBePacked: 0,
      },
    },
    {
      active: false,
      title: 'Puma Running Shoes Red 38',
      variants: 3,
      category: 'Woman shoes',
      retail_price: 150,
      wholesale_price: 90,
      sku: 'PUM-RED-38',
      stock: {
        onHand: 0,
        toBeReceived: 5,
        toBePacked: 2,
      },
    },
    {
      active: true,
      title: 'Reebok Classic White 40',
      variants: 5,
      category: 'Unisex shoes',
      retail_price: 170,
      wholesale_price: 110,
      sku: 'REE-WHT-40',
      stock: {
        onHand: 3,
        toBeReceived: 4,
        toBePacked: 1,
      },
    },
    {
      active: true,
      title: 'New Balance 574 Grey 44',
      variants: 7,
      category: 'Man shoes',
      retail_price: 190,
      wholesale_price: 130,
      sku: 'NB-GRY-44',
      stock: {
        onHand: 6,
        toBeReceived: 1,
        toBePacked: 3,
      },
    },
  ];

  filteredProducts = [...this.cardProductList];

  onSearch(): void {
    this.filteredProducts = this.cardProductList.filter((product) =>
      product.title.toLowerCase().includes(this.searchProduct.toLowerCase())
    );
  }
}
