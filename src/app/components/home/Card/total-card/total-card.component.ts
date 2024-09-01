import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-total-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './total-card.component.html',
  styleUrl: './total-card.component.scss',
})
export class TotalCardComponent {
  @Input() total: string = '';
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() percentage: number = 0;
}
