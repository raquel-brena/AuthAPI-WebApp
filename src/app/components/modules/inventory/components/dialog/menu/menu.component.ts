import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuButtonComponent } from './menu-button/menu-button.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() menuVisible!: string;
  @Output() setSelectedItem = new EventEmitter<
    'General Information' | 'History' | 'Notes'
  >();

  toggleMenu(menu: 'General Information' | 'History' | 'Notes'): void {
    this.menuVisible = menu;
    this.setSelectedItem.emit(menu);
  }
}
