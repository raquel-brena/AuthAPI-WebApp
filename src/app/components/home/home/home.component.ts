import { Component, Input } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ConteudoComponent } from '../conteudo/conteudo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, ConteudoComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  @Input() itemMenuSelected: string = '';

  constructor() {}

  changeItemMenuSelected(item: string) {
    this.itemMenuSelected = item;
  }
}
