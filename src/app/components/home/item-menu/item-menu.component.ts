import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  standalone: true,
  imports: [],
  templateUrl: './item-menu.component.html',
  styleUrl: './item-menu.component.scss'
})
export class ItemMenuComponent {
  @Input() category!: string;
  @Input() image_url!: string;

}
