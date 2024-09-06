import { Component, Input } from '@angular/core';
import { MenuComponent } from '../Menu/menu/menu.component';
import { ContainerCardComponent } from '../../dashboard/Card/index/container-card.component';
import { InventoryComponent } from '../../inventory/index/inventory.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, ContainerCardComponent, InventoryComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @Input() selectedItem: string = 'Invetory';

  constructor() {}

  setSelectedItem(item: string): void {
    this.selectedItem = item;
  }
}
