import { Component, Input } from '@angular/core';
import { ContainerCardComponent } from '../container-card/container-card.component';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [ ContainerCardComponent],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.scss',
})
export class ConteudoComponent {
  @Input() itemMenuSelected: string = '';

  constructor() {}
}
