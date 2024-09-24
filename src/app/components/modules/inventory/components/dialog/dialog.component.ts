import { Component, Input } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { ImagesComponent } from './images/images.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MenuComponent, ImagesComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  @Input() cardSelecionado: any;
  @Input() visible!: boolean;
}
