import { Component } from '@angular/core';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { ContainerCardComponent } from '../container-card/container-card.component';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [BarraSuperiorComponent, ContainerCardComponent],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.scss',
})

export class ConteudoComponent {}
