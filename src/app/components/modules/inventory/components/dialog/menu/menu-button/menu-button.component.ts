import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss',
})
export class MenuButtonComponent {
  @Input() menuVisible!: string;
  @Input() title:
  'General Information' | 'History' | 'Notes' = 'Notes';
  @Output() setSelectedItem = new EventEmitter<
    'General Information' | 'History' | 'Notes'
  >();

  onButtonClick(): void {
    this.setSelectedItem.emit(this.title);
  }
}
