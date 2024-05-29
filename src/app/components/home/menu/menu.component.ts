import { Component, EventEmitter, Output } from '@angular/core';
import { ItemMenuComponent } from '../item-menu/item-menu.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ItemMenuComponent],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @Output() itemMenuSelected = new EventEmitter<string>();

  items = [
    { category: 'Acessorio', image_url: 'assets/acessorio.svg' },
    { category: 'Notebook', image_url: 'assets/notebook.svg' },
    { category: 'Desktop', image_url: 'assets/desktop.svg' },
    { category: 'Monitor', image_url: 'assets/monitor.svg' },
    { category: 'Cadeira', image_url: 'assets/cadeira.svg' },
  ];

  selectedItem: string = 'Acessorio';

  constructor() {}

  changeItemMenuSelected(item: string) {
    this.selectedItem = item;
    this.itemMenuSelected.emit(this.selectedItem);
  }
}
