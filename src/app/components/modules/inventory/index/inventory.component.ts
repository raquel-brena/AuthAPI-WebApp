import { Component } from '@angular/core';
import { MenuFilterComponent } from '../menu-filter/menu-filter.component';
import { ContainerCardComponent } from '../../dashboard/Card/index/container-card.component';
import { CardComponent } from '../../dashboard/Card/card/card.component';
import { CardProductComponent } from '../card-product/card-product.component';
import { SearchComponent } from '../search/search.component';
import { ButtonComponent } from '../../../globalComponents/button/button.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    MenuFilterComponent,
    CardProductComponent,
    SearchComponent,
    ButtonComponent,
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent {}
