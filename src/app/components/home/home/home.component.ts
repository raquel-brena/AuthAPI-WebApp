import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ConteudoComponent } from '../conteudo/conteudo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, ConteudoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  itemMenuSelected: string = 'acessorio';

  constructor() { }

  changeItemMenuSelected(item: string) {
    this.itemMenuSelected = item;
  }
}
