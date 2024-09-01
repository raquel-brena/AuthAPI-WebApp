import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemMenuComponent } from '../item-menu/item-menu.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ItemMenuComponent],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  @Input() selectedItem!: string;
  @Output() setSelectedItem = new EventEmitter<string>();

  items = [
    { category: 'Dashboard', icon: 'dashboard' },
    { category: 'Invetory', icon: 'inventory' },
    { category: 'Sales', icon: 'store' },
    { category: 'Order', icon: 'shopping_bag' },
    { category: 'Report', icon: 'report' },
  ];

  constructor() {}

  changeItemMenuSelected(category: string) {
    this.selectedItem = category;
    this.setSelectedItem.emit(category); // Corrigido para usar o método emit
  }
}
