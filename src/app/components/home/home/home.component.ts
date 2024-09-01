import { Component, Input } from '@angular/core';
import { MenuComponent } from '../Menu/menu/menu.component';
import { ContainerCardComponent } from '../Card/container-card/container-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, ContainerCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @Input() selectedItem: string = 'Dashboard';

  constructor() {}

  setSelectedItem(item: string): void {
    this.selectedItem = item;
  }
}
