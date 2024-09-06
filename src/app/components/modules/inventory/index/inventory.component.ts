import { Component } from '@angular/core';
import { MenuFilterComponent } from '../menu-filter/menu-filter.component';
import { ContainerCardComponent } from '../../dashboard/Card/index/container-card.component';
import { ContainerCardProductComponent } from '../container-card-product/container-card-product.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [MenuFilterComponent, ContainerCardProductComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent {}
