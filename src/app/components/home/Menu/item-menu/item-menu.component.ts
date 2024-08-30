import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  standalone: true,
  imports: [],
  templateUrl: './item-menu.component.html',
  styleUrl: './item-menu.component.scss',
})
export class ItemMenuComponent {
  @Input() category!: string;
  @Input() image_url!: string;
  @Output() itemSelected = new EventEmitter<string>();

  constructor() {}

  changeItemMenuSelected() {
    this.itemSelected.emit(this.category);
  }
}
