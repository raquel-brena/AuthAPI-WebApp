import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/home/menu/menu.component';
import { BarraSuperiorComponent } from './components/home/barra-superior/barra-superior.component';
import { ConteudoComponent } from './components/home/conteudo/conteudo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'auth-api';
}
