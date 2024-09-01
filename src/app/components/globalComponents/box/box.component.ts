import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
})
export class BoxComponent {
  @Input() width: string = '';
  @Input() color = 'white';
  @Input() border = false;

  get boxWidth() {
    return this.width.includes('%') ? this.width : `${this.width}%`;
  }
}
