import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-item-menu',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './item-menu.component.html',
  styleUrl: './item-menu.component.scss',
})
export class ItemMenuComponent {
  @Input() category!: string;
  @Input() icon!: string;
  @Input() selectedItem!: string;
  @Output() setSelectedItem = new EventEmitter<string>();

  constructor() {}

  onButtonClick(): void {
    this.setSelectedItem.emit(this.category);
  }
}
