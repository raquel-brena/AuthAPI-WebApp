import { Component, Input } from "@angular/core";
import { MenuComponent } from "../Menu/menu/menu.component";
import { ContainerCardComponent } from "../Card/container-card/container-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, ContainerCardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  @Input() itemMenuSelected: string = '';

  constructor() {}

  changeItemMenuSelected(item: string) {
    this.itemMenuSelected = item;
  }
}
