import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input()
  name!: string;
  @Input()
  price!: number;
  @Input()
  description: string | undefined;
  @Input()
  sku!: string;
  @Input() quantity!: number;
  @Input() isAddSelected!: boolean;
  @Output() isAddSelectedChange = new EventEmitter<boolean>();

  select = () => {
    this.isAddSelected = !this.isAddSelected;
    this.isAddSelectedChange.emit(this.isAddSelected);
  };
}
