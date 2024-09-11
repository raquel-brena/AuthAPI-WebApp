import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'flex bg-theme font-semibold rounded-xl p-2 duration-300 bg-theme text-black hover:bg-[#2fc46d] items-center justify-center',
  variants: {
    outline: {
      true: 'bg-transparent border border-theme text-theme hover:border-[#2fc46d] hover:bg-transparent',
    },
    type: {
      default: 'h-10',
      tiny: 'bg-bg_fume-100 rounded-md hover:bg-bg_fume-200 text-text-primary',
      more: 'bg-transparent text-bg border border-text-placeholder rounded-md  hover:bg-bg_fume-200 p-1',
    },
  },
});

type ButtonProps = VariantProps<typeof button> & {};

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements ButtonProps {
  @Input() text? = '';
  @Input() icon1? = '';
  @Input() icon2? = '';
  @Input() outline = false;
  @Input() type: 'default' | 'tiny' | 'more' = 'default';

  get buttonClasses() {
    return button({ type: this.type, outline: this.outline });
  }
}
